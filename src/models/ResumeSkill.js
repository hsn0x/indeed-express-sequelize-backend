import sequelize from "../db/sequelize.js"
import SequelizeSlugify from "sequelize-slugify"

import { ARRAY, INTEGER, STRING, TEXT, ENUM } from "../db/dataTypes.js"
import { RESUME_SKILL_CONSTANTS } from "../constants/index.js"

const ResumeSkill = sequelize.define("ResumeSkill", {
    name: {
        type: STRING,
    },
    year_of_experience: {
        type: ENUM(RESUME_SKILL_CONSTANTS.yearOfExperience),
    },
})

export default ResumeSkill
