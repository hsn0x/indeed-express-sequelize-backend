import { Router } from "express"
import { AddressController } from "../controllers/index.js"
import { AuthMiddleware, AddressMiddleware } from "../middleware/index.js"

const router = Router()

router.get("/", AddressController.getAll)
router.post("/", AuthMiddleware.isAuth, AddressController.create)

router.get("/:id", AddressController.getById)
router.put(
    "/:id",
    AuthMiddleware.isAuth,
    AddressMiddleware.isOwner,
    AddressController.update
)
router.delete(
    "/:id",
    AuthMiddleware.isAuth,
    AddressMiddleware.isOwner,
    AddressController.remove
)

export default router
