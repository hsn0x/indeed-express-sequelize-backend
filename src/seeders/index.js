export { default as usersSeeders } from "./users.js"
export { default as reviewsSeeders } from "./reviews.js"
export { default as companiesSeeders } from "./companies.js"
export { default as jobsSeeders } from "./jobs.js"

import usersSeeders from "./users.js"
import reviewsSeeders from "./reviews.js"
import companiesSeeders from "./companies.js"
import jobsSeeders from "./jobs.js"

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
        await reviewsSeeders.createFake(RECORD)
    },
}
