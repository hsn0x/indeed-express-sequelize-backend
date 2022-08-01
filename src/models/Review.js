import sequelize from "../db/sequelize.js"
import SequelizeSlugify from "sequelize-slugify"

import { ARRAY, INTEGER, STRING, TEXT } from "../db/dataTypes.js"

const Review = sequelize.define("Review", {
    rate: {
        type: INTEGER,
        allowNull: false,
    },
    title: {
        type: STRING,
        allowNull: false,
    },
    content: {
        type: TEXT,
        allowNull: false,
    },
})

SequelizeSlugify.slugifyModel(Review, { source: ["title"] })

export default Review
