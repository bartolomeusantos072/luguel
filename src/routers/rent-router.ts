import { Router } from "express";
import { createImmobile, readImmobiles, updateImmobile, deleteImmobile, deleteAllImmobiles, rentalImmobile, deleteImagesImmobile } from "@/controllers";
import { authenticateToken, validateBody } from "@/middlewares";
import { immobilesSchema, availabilityImmovelSchema }  from "@/schemas/immobiles-schemas";

const rentRouter = Router();

rentRouter
  .get("/", readImmobiles)
  .all("/*", authenticateToken)
  .post("/", validateBody(immobilesSchema), createImmobile)
  .delete("/", deleteAllImmobiles)
  .put("/:immobileId", validateBody(availabilityImmovelSchema), rentalImmobile)
  .put("/:immobileId", validateBody(immobilesSchema), updateImmobile)
  .delete("/:immobileId", deleteImmobile)
  .delete("/:immobileId/imageId", deleteImagesImmobile);

export { rentRouter };
