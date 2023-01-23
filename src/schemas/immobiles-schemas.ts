import { AddressImovel, Imovel, PhotosImmobile } from "@prisma/client";
import Joi from "joi";

export type ImmobilesParams = Pick<Imovel, "area"|"rooms"|"bathroom"|"garage"|"yard"|"ilumination"|"water"|"pipedGas"|"furniture"|"pet"|"condominium"|"rent"|"iptu"|"availability"|"userId">

export type AddressImovelParams = Pick<AddressImovel, "cep"|"street"|  "number"|  "neighborhood"|  "city"|  "state"|  "addressDetail"|  "imovelId">

export type AddPhotoImmobile = Omit<PhotosImmobile, "id">

const regex = /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/;

export const photos = Joi.object({
  name: Joi.string().pattern(regex).required().trim(), 
});

export const photosImmobile = Joi.object({
  photosImmobile: Joi.array().items(photos).required()
});

export const immobiles = Joi.object<ImmobilesParams>({
  area: Joi.number().required(),
  rooms: Joi.number().required(),
  bathroom: Joi.number().required(),
  garage: Joi.number().required(),
  yard: Joi.boolean().required(),
  ilumination: Joi.string().valid("SHARED").valid("UNIQUE").valid("INCLUDED").required(),
  water: Joi.string().valid("SHARED").valid("UNIQUE").valid("INCLUDED").required(),
  pipedGas: Joi.boolean().required(),
  furniture: Joi.string().valid("FURNISHED").valid("FURNISHEDOFF").valid("FURNISHEDSEMI").required(),
  pet: Joi.boolean().required(),
  condominium: Joi.number().allow(null, 0),
  rent: Joi.number().required(),
  iptu: Joi.number().allow(null, 0),
  availability: Joi.boolean().required(),
  userId: Joi.number().required(),
});

export const addressImmobileSchemma = Joi.object<AddressImovelParams>({
  cep: Joi.string().length(8).required(),
  street: Joi.string().required(),
  number: Joi.string().required(),
  neighborhood: Joi.string().required(),
  city: Joi.string().required(),
  state: Joi.string().required(),
  addressDetail: Joi.string().required(),
});

export const immobilesSchema = Joi.object({
  immobiles: immobiles.required(),
  address: addressImmobileSchemma.required(),
  photosImmobile: photosImmobile.required()
});

export const availabilityImmovelSchema = Joi.object({
  availability: Joi.boolean().required(),
});
