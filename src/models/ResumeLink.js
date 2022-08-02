import sequelize from "../db/sequelize.js"
import SequelizeSlugify from "sequelize-slugify"

import { ARRAY, INTEGER, STRING, TEXT } from "../db/dataTypes.js"

const ResumeLink = sequelize.define("Resume_Link", {
    url: {
        type: TEXT,
    },
})

export default ResumeLink
