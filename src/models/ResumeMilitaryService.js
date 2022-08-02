import sequelize from "../db/sequelize.js"
import SequelizeSlugify from "sequelize-slugify"

import { ARRAY, BOOLEAN, INTEGER, STRING, TEXT } from "../db/dataTypes.js"

const ResumeMilitaryService = sequelize.define("Resume_Military_Service", {
    country_of_service: {
        type: INTEGER,
    },
    branch: {
        type: STRING,
    },
    rank: {
        type: TEXT,
    },
    currently_serving: {
        type: BOOLEAN,
    },
})

export default ResumeMilitaryService
