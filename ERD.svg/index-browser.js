
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 3.14.0
 * Query Engine version: 2b0c12756921c891fec4f68d9444e18c7d5d4a6a
 */
Prisma.prismaVersion = {
  client: "3.14.0",
  engine: "2b0c12756921c891fec4f68d9444e18c7d5d4a6a"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = 'DbNull'
Prisma.JsonNull = 'JsonNull'
Prisma.AnyNull = 'AnyNull'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  email: 'email',
  password: 'password',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.SessionScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  token: 'token',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.EnrollmentScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  cpf: 'cpf',
  birthday: 'birthday',
  phone: 'phone',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.AddressScalarFieldEnum = makeEnum({
  id: 'id',
  cep: 'cep',
  street: 'street',
  city: 'city',
  state: 'state',
  number: 'number',
  neighborhood: 'neighborhood',
  addressDetail: 'addressDetail',
  enrollmentId: 'enrollmentId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.ImovelScalarFieldEnum = makeEnum({
  id: 'id',
  area: 'area',
  rooms: 'rooms',
  bathroom: 'bathroom',
  garage: 'garage',
  yard: 'yard',
  ilumination: 'ilumination',
  water: 'water',
  pipedGas: 'pipedGas',
  furniture: 'furniture',
  pet: 'pet',
  condominium: 'condominium',
  rent: 'rent',
  iptu: 'iptu',
  availability: 'availability',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.AddressImovelScalarFieldEnum = makeEnum({
  id: 'id',
  cep: 'cep',
  street: 'street',
  number: 'number',
  neighborhood: 'neighborhood',
  city: 'city',
  state: 'state',
  addressDetail: 'addressDetail',
  imovelId: 'imovelId'
});

exports.Prisma.PhotosImmobileScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  imovelId: 'imovelId'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});
exports.amountStatus = makeEnum({
  SHARED: 'SHARED',
  UNIQUE: 'UNIQUE',
  INCLUDED: 'INCLUDED'
});

exports.mobiliaStatus = makeEnum({
  FURNISHED: 'FURNISHED',
  FURNISHEDOFF: 'FURNISHEDOFF',
  FURNISHEDSEMI: 'FURNISHEDSEMI'
});

exports.Prisma.ModelName = makeEnum({
  User: 'User',
  Session: 'Session',
  Enrollment: 'Enrollment',
  Address: 'Address',
  Imovel: 'Imovel',
  AddressImovel: 'AddressImovel',
  PhotosImmobile: 'PhotosImmobile'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
