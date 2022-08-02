import sequelize from "../db/sequelize.js"
import SequelizeSlugify from "sequelize-slugify"

import { ARRAY, INTEGER, STRING, TEXT } from "../db/dataTypes.js"

const ResumePatents = sequelize.define("Resume_Patent", {
    title: {
        type: INTEGER,
    },
    patent_number: {
        type: STRING,
        allowNull: false,
    },
    url: {
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

export default ResumePatents
