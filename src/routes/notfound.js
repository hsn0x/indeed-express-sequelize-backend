import { Router } from "express"
import { NotFoundController } from "../controllers/index.js"
import { AuthMiddleware, NotFoundMiddleware } from "../middleware/index.js"

const router = Router()

router.get("/", NotFoundController[404])

export default router
