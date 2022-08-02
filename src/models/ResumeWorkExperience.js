import sequelize from "../db/sequelize.js"
import SequelizeSlugify from "sequelize-slugify"

import { ARRAY, BOOLEAN, INTEGER, STRING, TEXT } from "../db/dataTypes.js"

const ResumeWorkExperience = sequelize.define("ResumeWorkExperience", {
    job_title: {
        type: STRING,
    },
    company: {
        type: STRING,
    },
    city: {
        type: STRING,
    },
    time_period_work_here: {
        type: BOOLEAN,
    },
    time_period_from: {
        type: STRING,
    },
    time_period_to: {
        type: STRING,
    },
    description: {
        type: TEXT,
    },
})

export default ResumeWorkExperience
