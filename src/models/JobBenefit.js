import sequelize from "../db/sequelize.js"
import SequelizeSlugify from "sequelize-slugify"

import { ARRAY, INTEGER, STRING, TEXT } from "../db/dataTypes.js"

const JobBenefit = sequelize.define("JobBenefit", {
    name: {
        type: STRING,
        allowNull: false,
    },
})

SequelizeSlugify.slugifyModel(JobBenefit, { source: ["title"] })

export default JobBenefit
