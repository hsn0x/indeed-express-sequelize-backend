/**
 * @description - Import routes for the application.
 */
import home from "./home.js"
import users from "./users.js"
import auth from "./auth.js"

import reviews from "./reviews.js"

import companies from "./companies.js"
import jobs from "./jobs.js"

import addresses from "./addresses.js"
import phones from "./phones.js"
import resumes from "./resumes.js"

/**
 * import Middleware for the application.
 */
import { AuthMiddleware } from "../middleware/index.js"

/**
 * @description - Import router for the application.
 */
import { Router } from "express"

/**
 * @description - Create a new router for the application.
 */
const router = Router()

/**
 * -------------- ROUTES ----------------
 */

// Imports all of the routes from ./routes/index.js
/**
 * @description - Routes for the application.
 */
router.use("/", home)
router.use("/auth", auth)
router.use("/users", users)

router.use("/reviews", reviews)

router.use("/jobs", jobs)
router.use("/companies", companies)

router.use("/addresses", addresses)
router.use("/phones", phones)
router.use("/resumes", resumes)

export default router
