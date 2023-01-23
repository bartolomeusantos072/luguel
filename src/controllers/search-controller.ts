import { Request, Response } from "express";
import httpStatus from "http-status";
import searchBoxService from "@/services/search-service";

export async function searchBoxController(req: Request, res: Response) {
  const { cep, city, neighborhood } = req.query;
  if(!req.query || (!cep && !city && !neighborhood)) {
    return res.status(httpStatus.UNAUTHORIZED).send("chave invalida");
  }
  try {
    const search = await searchBoxService.searchQuery(req.query);
    res.status(httpStatus.OK).send(search);
  } catch (error) {
    return res.status(httpStatus.NOT_FOUND);
  }
  return res.send(req.query);
}
