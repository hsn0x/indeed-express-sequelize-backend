import sequelize from "../db/sequelize.js"
import SequelizeSlugify from "sequelize-slugify"

import { ARRAY, INTEGER, STRING, TEXT, ENUM } from "../db/dataTypes.js"
import { COMPANY_CONSTANTS } from "../constants/index.js"

const industries = COMPANY_CONSTANTS.industries.map((industry) => industry.name)
const subIndustries = COMPANY_CONSTANTS.industries
    .map((industry) => industry.children.map((subIndustry) => subIndustry.name))
    .reduce((acc, curr) => acc.concat(curr), [])

const Company = sequelize.define("Company", {
    name: {
        type: STRING,
        allowNull: false,
    },
    number_of_employees: {
        type: INTEGER,
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
        type: ENUM(industries),
    },
    sub_industry: {
        type: ENUM(subIndustries),
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
