import sequelize from "../db/sequelize.js"
import SequelizeSlugify from "sequelize-slugify"

import { ARRAY, INTEGER, STRING, TEXT } from "../db/dataTypes.js"

const ResumeSkill = sequelize.define("ResumeSkill", {
    name: {
        type: STRING,
    },
    year_of_experience: {
        type: STRING,
    },
})

export default ResumeSkill
