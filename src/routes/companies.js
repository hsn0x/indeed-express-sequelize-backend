import { Router } from "express"
import { CompanyController } from "../controllers/index.js"
import { AuthMiddleware, CompanyMiddleware } from "../middleware/index.js"

const router = Router()

router.get("/", CompanyController.getAll)
router.post("/", AuthMiddleware.isAuth, CompanyController.create)

router.get("/:id", CompanyController.getById)
router.put(
    "/:id",
    AuthMiddleware.isAuth,
    CompanyMiddleware.isOwner,
    CompanyController.update
)
router.delete(
    "/:id",
    AuthMiddleware.isAuth,
    CompanyMiddleware.isOwner,
    CompanyController.remove
)

export default router
