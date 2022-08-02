import sequelize from "../db/sequelize.js"
import SequelizeSlugify from "sequelize-slugify"

import { ARRAY, BOOLEAN, INTEGER, STRING, TEXT } from "../db/dataTypes.js"

const ResumeMilitaryService = sequelize.define("ResumeMilitaryService", {
    country_of_service: {
        type: STRING,
    },
    branch: {
        type: STRING,
    },
    rank: {
        type: STRING,
    },
    currently_serving: {
        type: BOOLEAN,
    },
})

export default ResumeMilitaryService
