import { Router } from "express"
import { JobController } from "../controllers/index.js"
import { AuthMiddleware, JobMiddleware } from "../middleware/index.js"

const router = Router()

router.get("/", JobController.getAll)
router.post("/", AuthMiddleware.isAuth, JobController.create)

router.get("/:id", JobController.getById)
router.put(
    "/:id",
    AuthMiddleware.isAuth,
    JobMiddleware.isOwner,
    JobController.update
)
router.delete(
    "/:id",
    AuthMiddleware.isAuth,
    JobMiddleware.isOwner,
    JobController.remove
)

export default router
