import { Router } from "express"
import { ResumeController } from "../controllers/index.js"
import { AuthMiddleware, ResumeMiddleware } from "../middleware/index.js"

const router = Router()

router.get("/", ResumeController.getAll)
router.post("/", AuthMiddleware.isAuth, ResumeController.create)

router.get("/:id", ResumeController.getById)
router.put(
    "/:id",
    AuthMiddleware.isAuth,
    ResumeMiddleware.isOwner,
    ResumeController.update
)
router.delete(
    "/:id",
    AuthMiddleware.isAuth,
    ResumeMiddleware.isOwner,
    ResumeController.remove
)

export default router
