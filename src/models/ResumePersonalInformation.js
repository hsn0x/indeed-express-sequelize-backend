import sequelize from "../db/sequelize.js"
import SequelizeSlugify from "sequelize-slugify"

import { ARRAY, BOOLEAN, INTEGER, STRING, TEXT, ENUM } from "../db/dataTypes.js"
// import { ENUM } from "sequelize"

const ResumePersonalnformation = sequelize.define(
    "Resume_Personal_Information",
    {
        first_name: {
            type: INTEGER,
        },
        last_name: {
            type: STRING,
        },
        headline: {
            type: TEXT,
        },
        summary: {
            type: TEXT,
        },
        headline: {
            type: TEXT,
        },
        city: {
            type: TEXT,
        },
        postal_code: {
            type: TEXT,
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

export default ResumePersonalnformation
