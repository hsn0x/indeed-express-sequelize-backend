import { Router } from "express"
import { PhoneController } from "../controllers/index.js"
import { AuthMiddleware, PhoneMiddleware } from "../middleware/index.js"

const router = Router()

router.get("/", PhoneController.getAll)
router.post("/", AuthMiddleware.isAuth, PhoneController.create)

router.get("/:id", PhoneController.getById)
router.put(
    "/:id",
    AuthMiddleware.isAuth,
    PhoneMiddleware.isOwner,
    PhoneController.update
)
router.delete(
    "/:id",
    AuthMiddleware.isAuth,
    PhoneMiddleware.isOwner,
    PhoneController.remove
)

export default router
