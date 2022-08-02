import { Router } from "express"
import { FollowerController } from "../controllers/index.js"
import { AuthMiddleware, FollowerMiddleware } from "../middleware/index.js"

const router = Router()

router.get("/", FollowerController.getAll)
router.post("/", AuthMiddleware.isAuth, FollowerController.create)

router.get("/:id", FollowerController.getById)
router.put(
    "/:id",
    AuthMiddleware.isAuth,
    FollowerMiddleware.isOwner,
    FollowerController.update
)
router.delete(
    "/:id",
    AuthMiddleware.isAuth,
    FollowerMiddleware.isOwner,
    FollowerController.remove
)

export default router
