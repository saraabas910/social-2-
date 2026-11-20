import { Router } from "express";
import AuthController from "./controller/auth.controller.js";
const authRouter = Router();
authRouter.post('/register', AuthController.register);
//# sourceMappingURL=route.js.map