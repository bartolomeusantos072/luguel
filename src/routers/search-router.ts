import { Router } from "express";
import { searchBoxController } from "@/controllers";

const searchBoxRouter = Router();

searchBoxRouter
  .get("/", searchBoxController);

export { searchBoxRouter };
