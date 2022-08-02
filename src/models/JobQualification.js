import sequelize from "../db/sequelize.js"
import SequelizeSlugify from "sequelize-slugify"

import { ARRAY, INTEGER, STRING, TEXT } from "../db/dataTypes.js"

const JobQualifications = sequelize.define("JobQualifications", {
    name: {
        type: STRING,
        allowNull: false,
    },
})

SequelizeSlugify.slugifyModel(JobQualifications, { source: ["title"] })

export default JobQualifications
