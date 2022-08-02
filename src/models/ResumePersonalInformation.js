import sequelize from "../db/sequelize.js"
import SequelizeSlugify from "sequelize-slugify"

import { ARRAY, BOOLEAN, INTEGER, STRING, TEXT, ENUM } from "../db/dataTypes.js"
// import { ENUM } from "sequelize"

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
                "authorized_to_work_in_the_us_for_any_employer",
                "sponsorship_required_to_work_in_the_us",
                "not_specified"
            ),
        },
    }
)

export default ResumePersonalInformation
