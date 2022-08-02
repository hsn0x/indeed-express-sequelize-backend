export { default as usersSeeders } from "./users.js"
export { default as reviewsSeeders } from "./reviews.js"
export { default as companiesSeeders } from "./companies.js"

export { default as jobsSeeders } from "./jobs.js"
export { default as jobBenefitsSeeders } from "./jobBenefits.js"
export { default as jobQualificationsSeeders } from "./jobQualifications.js"

export { default as followersSeeders } from "./followers.js"

export { default as resumesSeeders } from "./resumes.js"

import usersSeeders from "./users.js"
import reviewsSeeders from "./reviews.js"
import companiesSeeders from "./companies.js"

import jobsSeeders from "./jobs.js"
import jobBenefitsSeeders from "./jobBenefits.js"
import jobQualificationsSeeders from "./jobQualifications.js"

import resumesSeeders from "./resumes.js"

import followersSeeders from "./followers.js"

const RECORD = seedersConfig.amount

import { seedersConfig } from "../config/index.js"

export default {
    /**
     *
     */
    dbSeed: async () => {
        await usersSeeders.create()
    },

    /**
     *
     */
    dbSeedFake: async () => {
        await usersSeeders.createFake(RECORD)
        await companiesSeeders.createFake(RECORD)

        await jobsSeeders.createFake(RECORD)
        await jobBenefitsSeeders.createFake(RECORD)
        await jobQualificationsSeeders.createFake(RECORD)

        await reviewsSeeders.createFake(RECORD)

        await resumesSeeders.createFake(RECORD)

        await followersSeeders.createFake(RECORD)
    },
}
