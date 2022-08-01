import { Router } from "express"
import bodyParser from "./BodyParser.js"
import passport from "./Passport.js"
import sequelize from "./Sequelize.js"
import cors from "cors"

export { default as AuthMiddleware } from "./Auth.js"

export { default as ReviewMiddleware } from "./Review.js"

export { default as CompanyMiddleware } from "./Company.js"
export { default as JobMiddleware } from "./Job.js"

const router = Router()

const corsConfig = {
    origin: true,
    credentials: true,
}

router.use(cors(corsConfig))
router.options("*", cors(corsConfig))
router.use(sequelize)
router.use(bodyParser)
router.use(passport)

export default router
