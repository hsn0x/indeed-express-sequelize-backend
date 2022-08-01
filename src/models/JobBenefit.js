import sequelize from "../db/sequelize.js"
import SequelizeSlugify from "sequelize-slugify"

import { ARRAY, INTEGER, STRING, TEXT } from "../db/dataTypes.js"

const Job_Benefit = sequelize.define("Job_Benefit", {
    name: {
        type: STRING,
        allowNull: false,
    },
})

SequelizeSlugify.slugifyModel(Job_Benefit, { source: ["title"] })

export default Job_Benefit
