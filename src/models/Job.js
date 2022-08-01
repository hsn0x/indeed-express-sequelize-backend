import sequelize from "../db/sequelize.js"
import SequelizeSlugify from "sequelize-slugify"

import { ARRAY, INTEGER, STRING, TEXT } from "../db/dataTypes.js"

const Job = sequelize.define("Job", {
    title: {
        type: STRING,
        allowNull: false,
    },
    slug: {
        type: STRING,
    },
    description: {
        type: TEXT,
        allowNull: false,
    },
    salary_min: {
        type: INTEGER,
    },
    salary_max: {
        type: INTEGER,
    },
    type: {
        type: STRING,
    },
    industry: {
        type: STRING,
    },
})

SequelizeSlugify.slugifyModel(Job, { source: ["title"] })

export default Job
