import sequelize from "../db/sequelize.js"
import SequelizeSlugify from "sequelize-slugify"

import { ARRAY, INTEGER, STRING, TEXT } from "../db/dataTypes.js"

const ResumeLanguage = sequelize.define("Resume_Language", {
    name: {
        type: STRING,
    },
    proficiency: {
        type: TEXT,
        allowNull: false,
    },
})

export default ResumeLanguage
