import sequelize from "../db/sequelize.js"
import SequelizeSlugify from "sequelize-slugify"

import { ARRAY, BOOLEAN, INTEGER, STRING, TEXT } from "../db/dataTypes.js"

const ResumeCertification = sequelize.define("Resume_Certification", {
    title: {
        type: STRING,
    },
    time_period_not_expire: {
        type: BOOLEAN,
    },
    time_period_from: {
        type: TEXT,
    },
    time_period_to: {
        type: TEXT,
    },
    description: {
        type: TEXT,
    },
})

export default ResumeCertification
