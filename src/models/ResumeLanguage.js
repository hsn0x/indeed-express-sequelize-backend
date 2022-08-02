import sequelize from "../db/sequelize.js"
import SequelizeSlugify from "sequelize-slugify"

import { ARRAY, INTEGER, STRING, TEXT } from "../db/dataTypes.js"

const ResumeLanguage = sequelize.define("ResumeLanguage", {
    name: {
        type: STRING,
    },
    proficiency: {
        type: TEXT,
    },
})

export default ResumeLanguage
