import sequelize from "../db/sequelize.js"
import SequelizeSlugify from "sequelize-slugify"

import { ARRAY, INTEGER, STRING, TEXT } from "../db/dataTypes.js"

const ResumeSkills = sequelize.define("Resume_Skill", {
    name: {
        type: STRING,
    },
    year_of_experience: {
        type: TEXT,
    },
})

export default ResumeSkills
