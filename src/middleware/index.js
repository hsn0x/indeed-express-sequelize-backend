import { Router } from "express"
import bodyParser from "./BodyParser.js"
import passport from "./Passport.js"
import sequelize from "./Sequelize.js"
import cors from "cors"

export { default as AuthMiddleware } from "./Auth.js"

export { default as ReviewMiddleware } from "./Review.js"

export { default as CompanyMiddleware } from "./Company.js"
export { default as JobMiddleware } from "./Job.js"

export { default as AddressMiddleware } from "./Address.js"
export { default as PhoneMiddleware } from "./Phone.js"
export { default as ResumeMiddleware } from "./Resume.js"

export { default as FollowMiddleware } from "./Follow.js"

export { default as NotFoundMiddleware } from "./NotFound.js"

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
