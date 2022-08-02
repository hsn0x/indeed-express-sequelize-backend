import sequelize from "../db/sequelize.js"
import SequelizeSlugify from "sequelize-slugify"

import { ARRAY, INTEGER, STRING, TEXT } from "../db/dataTypes.js"

const ResumeAdditionalInformation = sequelize.define(
    "ResumeAdditionalInformation",
    {
        content: {
            type: TEXT,
        },
    }
)

export default ResumeAdditionalInformation
