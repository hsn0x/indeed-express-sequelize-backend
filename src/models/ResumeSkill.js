import sequelize from "../db/sequelize.js"
import SequelizeSlugify from "sequelize-slugify"

import { ARRAY, INTEGER, STRING, TEXT, ENUM } from "../db/dataTypes.js"

const ResumeSkill = sequelize.define("ResumeSkill", {
    name: {
        type: STRING,
    },
    year_of_experience: {
        type: ENUM(
            "less than 1 year",
            "1 year",
            "2 years",
            "3 years",
            "4 years",
            "5 years",
            "6 years",
            "7 years",
            "8 years",
            "9 years",
            "10+ years"
        ),
    },
})

export default ResumeSkill
