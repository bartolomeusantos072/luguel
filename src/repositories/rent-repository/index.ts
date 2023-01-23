import { prisma } from "@/config";
import { AddressImovelParams, ImmobilesParams, AddPhotoImmobile } from "@/schemas";

function readImmobiles() {
  return prisma.imovel.findMany({
    include: {
      addressImovel: true,
      photosImmobile: true,
    }
  });
}

function findAddressImmobile( zipCode: string, address: string ) {
  return prisma.addressImovel.findFirst({
    where: {
      cep: zipCode,
      addressDetail: address
    }
  });
}

async function createImmobile(userId: number, immobile: ImmobilesParams, address: AddressImovelParams, photosImmobile: AddPhotoImmobile[]) {
  const house = await prisma.imovel.create({
    data: {
      ...immobile, userId,
      addressImovel: {
        create: {
          ...address
        }
      },
      photosImmobile: {
        create: {
          ...photosImmobile
        }
      }

    }
  });
  return house;
}

async function updateImmobile( immobileId: number, immobile: ImmobilesParams, address: AddressImovelParams) {
  return prisma.imovel.update({
    where: {
      id: immobileId,
    },
    data: {
      ...immobile,
      addressImovel: { 
        update: {
          where: {
            imovelId: immobileId,
          },
          data: {
            ... address
          }
        }
      }
    }
  });
}

async function rentalImmobile( immobileId: number, availability: boolean) {
  return prisma.imovel.update({
    where: {
      id: immobileId,
    },
    data: {
      availability,
    },
    include: {
      addressImovel: true,
      photosImmobile: true,
    }
  });
}

async function deleteImmobile(userId: number, immobileId: number) {
  return prisma.imovel.delete({
    where: {
      id: immobileId,
    },
    select: {
      userId: true,
      addressImovel: true,
      photosImmobile: true,
    }
  });
}
async function deleteAllImmobiles(userId: number) {
  return prisma.imovel.deleteMany({
    where: {
      userId,
    },
  });
}

async function findImmobileByUser(userId: number, immobileId: number) {
  return prisma.imovel.findFirst({
    where: {
      id: immobileId,
      userId
    },
    include: {
      addressImovel: true,
      photosImmobile: true,
    }
  });
}
async function findImmobilesByUser(userId: number) {
  return prisma.imovel.findMany({
    where: {
      userId
    },
    include: {
      addressImovel: true,
      photosImmobile: true,
    }
  });
}
async function deleteImageImmobile( photosId: number) {
  return prisma.photosImmobile.delete({
    where: {
      id: photosId
    }
  });
}
const rentRepository = {
  createImmobile,
  readImmobiles,
  rentalImmobile,
  updateImmobile,
  deleteImmobile,
  deleteAllImmobiles,
  deleteImageImmobile,
  findImmobileByUser,
  findImmobilesByUser,
  findAddressImmobile,
};

export default rentRepository;
