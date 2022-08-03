import Ajv from "ajv"
import { COMPANY_CONSTANTS } from "../constants/index.js"

const ajv = new Ajv()

const industries = COMPANY_CONSTANTS.industries.map((industry) => industry.name)
const subIndustries = COMPANY_CONSTANTS.industries
    .map((industry) => industry.children.map((subIndustry) => subIndustry.name))
    .reduce((acc, curr) => acc.concat(curr), [])

const CreateSchema = {
    type: "object",
    properties: {
        name: { type: "string" },
        number_of_employees: { type: "number" },
        about: { type: "string" },
        ceo: { type: "string" },
        founded: { type: "string" },
        company_size: { type: "number" },
        revenue: { type: "number" },

        industry: { enum: industries },
        sub_industry: { enum: subIndustries },

        headquarters: { type: "string" },
        link: { type: "string" },

        UserId: { type: "number" },
    },
    required: ["name", "about"],
    additionalProperties: false,
}

const UpdateSchema = {
    type: "object",
    properties: {
        name: { type: "string" },
        number_of_employees: { type: "number" },
        about: { type: "string" },
        ceo: { type: "string" },
        founded: { type: "string" },
        company_size: { type: "number" },
        revenue: { type: "number" },

        industry: { enum: industries },
        sub_industry: { enum: subIndustries },

        headquarters: { type: "string" },
        link: { type: "string" },

        UserId: { type: "number" },
    },
    required: ["name", "about"],
    additionalProperties: false,
}

export default {
    validateCreate: async (data) => {
        const valid = ajv.validate(CreateSchema, data)
        if (!valid)
            return {
                valid,
                errors: ajv.errors,
            }
        return { valid }
    },
    validateUpdate: async (data) => {
        const valid = ajv.validate(UpdateSchema, data)
        if (!valid)
            return {
                valid,
                errors: ajv.errors,
            }
        return { valid }
    },
}
