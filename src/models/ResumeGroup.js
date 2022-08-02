import sequelize from "../db/sequelize.js"
import SequelizeSlugify from "sequelize-slugify"

import { ARRAY, INTEGER, STRING, TEXT } from "../db/dataTypes.js"

const ResumeGroups = sequelize.define("Resume_Group", {
    title: {
        type: STRING,
        allowNull: false,
    },
    time_period_not_expire: {
        type: TEXT,
        allowNull: false,
    },
    time_period_from: {
        type: TEXT,
        allowNull: false,
    },
    time_period_to: {
        type: TEXT,
        allowNull: false,
    },
    description: {
        type: TEXT,
        allowNull: false,
    },
})

export default ResumeGroups
