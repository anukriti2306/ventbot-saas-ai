import { Router } from "express";
import userRoutes from "./user-routes.js";
const chatRoutes = Router();
userRoutes.get("/");
export default chatRoutes;
//# sourceMappingURL=chat-routes.js.map