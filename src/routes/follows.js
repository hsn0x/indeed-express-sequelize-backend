import { Router } from "express"
import { FollowController } from "../controllers/index.js"
import { AuthMiddleware, FollowMiddleware } from "../middleware/index.js"

const router = Router()

router.get("/", FollowController.getAll)
router.post("/", AuthMiddleware.isAuth, FollowController.create)

router.get("/:id", FollowController.getById)
router.put(
    "/:id",
    AuthMiddleware.isAuth,
    FollowMiddleware.isOwner,
    FollowController.update
)
router.delete(
    "/:id",
    AuthMiddleware.isAuth,
    FollowMiddleware.isOwner,
    FollowController.remove
)

export default router
