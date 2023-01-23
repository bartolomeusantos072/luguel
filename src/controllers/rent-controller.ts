import { Request, Response } from "express";
import httpStatus from "http-status";
import rentService from "@/services/rent-service";
import { AuthenticatedRequest } from "@/middlewares";

export async function readImmobiles(req: Request, res: Response) {
  try {
    const immobiles = await rentService.readImmobiles();
    res.status(httpStatus.OK).send(immobiles);
  } catch (error) {
    return res.status(httpStatus.NOT_FOUND);
  }
}

export async function createImmobile(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const { immobiles, address, photosImmobile } = req.body;
  if (!immobiles || !address || !photosImmobile) {
    return res.status(httpStatus.NOT_FOUND);
  }
  try {
    const created = await rentService.createImmobile(userId, immobiles, address, photosImmobile);
    res.status(httpStatus.CREATED).send(created);
  } catch (error) {
    return res.status(httpStatus.UNAUTHORIZED);
  }
}

export async function updateImmobile(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const { immobileId } = (req.params);
  if(!Number(immobileId)) {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY);
  }
  const { immobiles, address, photosImmobile } = req.body;
  if (!immobiles || !address || !photosImmobile) {
    return res.status(httpStatus.NOT_FOUND);
  }
  try {
    const result= await rentService.updateImmobile(userId, Number(immobileId), immobiles, address, photosImmobile);
    res.status(200).send(result);
  } catch (error) {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY);
  }
}
export async function rentalImmobile(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const { immobileId } = (req.params);
  if(!Number(immobileId)) {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY);
  }
  const { availability } = req.body;
  
  try {
    const result= await rentService.rentalImmobile(userId, Number(immobileId), availability);
    res.status(200).send(result);
  } catch (error) {
    return res.status(httpStatus.NOT_FOUND).send(error.message);
  }
}

export async function deleteImmobile(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const { immobileId } = (req.params);
  if(!Number(immobileId)) {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY);
  }
  try {
    const result = await rentService.deleteImmobile(userId, Number(immobileId));
    res.status(200).send(result).send("immoveis excuido com sucesso");
  } catch (error) {
    return res.status(httpStatus.NOT_FOUND);
  }
}

export async function deleteAllImmobiles(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  if (isNaN(userId)) {
    res.sendStatus(httpStatus.UNPROCESSABLE_ENTITY);
  }
  try {
    const result = await rentService.deleteAllImmobiles(userId);
    res.status(200).send(result).send("immoveis excuido com sucesso");
  } catch (error) {
    res.sendStatus(httpStatus.NOT_FOUND);
  }
}

export async function deleteImagesImmobile(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const { immobileId } = (req.params);
  if(!Number(immobileId)) {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY);
  }
  const { arrayImages } = req.body;
  if (!arrayImages.length  ) {
    return res.status(httpStatus.NOT_FOUND);
  }
  try {
    await rentService.deleteImagesImmobile(userId, Number(immobileId), arrayImages);
    res.status(httpStatus.OK).send(200);
  } catch (error) {
    return res.status(httpStatus.NOT_FOUND);
  }
}
