import sequelize from "../db/sequelize.js"
import SequelizeSlugify from "sequelize-slugify"

import { ARRAY, INTEGER, STRING, TEXT } from "../db/dataTypes.js"

const Company = sequelize.define("Company", {
    name: {
        type: STRING,
        allowNull: false,
    },
    slug: {
        type: STRING,
    },
    about: {
        type: TEXT,
        allowNull: false,
    },
    ceo: {
        type: STRING,
    },
    founded: {
        type: STRING,
    },
    company_size: {
        type: STRING,
    },
    revenue: {
        type: STRING,
    },
    industry: {
        type: STRING,
    },
    headquarters: {
        type: STRING,
    },
    link: {
        type: STRING,
    },
})

SequelizeSlugify.slugifyModel(Company, { source: ["title"] })

export default Company
