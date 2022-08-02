import sequelize from "../db/sequelize.js"
import SequelizeSlugify from "sequelize-slugify"

import { ARRAY, INTEGER, STRING, TEXT } from "../db/dataTypes.js"

const ResumeLink = sequelize.define("ResumeLink", {
    url: {
        type: TEXT,
    },
})

export default ResumeLink
