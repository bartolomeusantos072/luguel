import { conflictError, notFoundError, requestError } from "@/errors";
import rentRepository from "@/repositories/rent-repository";
import { AddPhotoImmobile, AddressImovelParams, ImmobilesParams } from "@/schemas";

async function readImmobiles() {
  const immobiles = await rentRepository.readImmobiles();

  if (!immobiles) notFoundError();
  return immobiles;
}

async function createImmobile(userId: number, immobile: ImmobilesParams, address: AddressImovelParams, photosImmobile: AddPhotoImmobile[]) {
  const searchImmobile = await rentRepository.findAddressImmobile(address.cep, address.addressDetail);
  if (searchImmobile) conflictError("Imovel já esta cadastrado");

  const insertImmobile = await rentRepository.createImmobile(userId, immobile, address, photosImmobile);
  if (!insertImmobile) requestError;

  return insertImmobile;
}

async function rentalImmobile(userId: number, immobileId: number, availability: boolean) {
  const searchImmobile = await rentRepository.findImmobileByUser(userId, immobileId);
  if (!searchImmobile) throw notFoundError();
  const updateImmobile = await rentRepository.rentalImmobile(immobileId, availability);
  return updateImmobile;
}

async function updateImmobile(userId: number, immobileId: number, immobiles: ImmobilesParams, address: AddressImovelParams, photosUpdate: AddPhotoImmobile[]) {
  const searchImmobile = await rentRepository.findImmobileByUser(userId, immobileId);
  if (!searchImmobile) throw notFoundError();

  for (let i = 0; i < searchImmobile.photosImmobile.length; i++) {
    if (searchImmobile.photosImmobile[i].name === photosUpdate[i].name) {
      continue;
    }
  }
  // const availability = await rentRepository.availabilityImmovel(immobileId, availability);
}

async function deleteImmobile(userId: number, immobileId: number) {
  const search = await rentRepository.findImmobileByUser(userId, immobileId);
  if (!search) throw notFoundError();
  const deleteImmovel = await rentRepository.deleteImmobile(userId, immobileId);
  return deleteImmovel;
}

async function deleteAllImmobiles(userId: number) {
  const search = await rentRepository.findImmobilesByUser(userId);
  if (!search) throw notFoundError();
  const deleteAll = await rentRepository.deleteAllImmobiles(userId);
  if (!deleteAll) notFoundError();
  return deleteAll;
}

async function deleteImagesImmobile(userId: number, immobileId: number, arrayImages: number[]) {
  const findPhotos = await rentRepository.findImmobileByUser(userId, immobileId);
  if (!findPhotos) throw notFoundError();
  if (arrayImages.length > 0) {
    arrayImages = arrayImages.sort((a, b) => a - b);
  }
  const deleteImages = findPhotos.photosImmobile.map(async photos => await rentRepository.deleteImageImmobile(arrayImages.indexOf(photos.id) > -1 && photos.id ));
  return deleteImages;
}
const rentService = {
  readImmobiles,
  createImmobile,
  updateImmobile,
  rentalImmobile,
  deleteImmobile,
  deleteAllImmobiles,
  deleteImagesImmobile
};

export default rentService;
