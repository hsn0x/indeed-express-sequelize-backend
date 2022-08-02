import sequelize from "../db/sequelize.js"
import SequelizeSlugify from "sequelize-slugify"

import { ARRAY, INTEGER, STRING, TEXT } from "../db/dataTypes.js"

const ResumeAward = sequelize.define("ResumeAward", {
    title: {
        type: STRING,
    },
    date_awarded_month: {
        type: STRING,
    },
    date_awarded_year: {
        type: STRING,
    },
    description: {
        type: TEXT,
    },
})

export default ResumeAward
