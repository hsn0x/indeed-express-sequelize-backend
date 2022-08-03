import sequelize from "../db/sequelize.js"
import SequelizeSlugify from "sequelize-slugify"

import { ARRAY, BOOLEAN, INTEGER, STRING, TEXT, ENUM } from "../db/dataTypes.js"
import { RESUME_PERSONAL_INFORMATION_CONSTANTS } from "../constants/index.js"

const ResumePersonalInformation = sequelize.define(
    "ResumePersonalInformation",
    {
        first_name: {
            type: STRING,
        },
        last_name: {
            type: STRING,
        },
        headline: {
            type: STRING,
        },
        summary: {
            type: TEXT,
        },
        city: {
            type: STRING,
        },
        postal_code: {
            type: STRING,
        },
        relocation: {
            type: BOOLEAN,
        },
        employment_eligibility: {
            type: ENUM(
                RESUME_PERSONAL_INFORMATION_CONSTANTS.employment_eligibility
            ),
        },
    }
)

export default ResumePersonalInformation
