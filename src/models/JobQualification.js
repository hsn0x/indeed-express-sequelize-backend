import sequelize from "../db/sequelize.js"
import SequelizeSlugify from "sequelize-slugify"

import { ARRAY, INTEGER, STRING, TEXT } from "../db/dataTypes.js"

const Job_Qualification = sequelize.define("Job_Qualification", {
    name: {
        type: STRING,
        allowNull: false,
    },
})

SequelizeSlugify.slugifyModel(Job_Qualification, { source: ["title"] })

export default Job_Qualification
