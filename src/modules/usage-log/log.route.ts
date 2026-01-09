import { Router } from "express";
import { logController } from "./log.controller";
import auth from "../../middleware/auth";


const logRouter = Router();

// logRouter.post("/", auth([Role.Student]), logController.createUsageLog);
logRouter.get("/", logController.getUsageLogs);
logRouter.patch("/:id", auth(), logController.updateUsageLog);

export default logRouter;
