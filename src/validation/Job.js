import Ajv from "ajv"

const ajv = new Ajv()

const CreateSchema = {
    type: "object",
    properties: {
        name: { type: "string" },
        about: { type: "string" },
        ceo: { type: "string" },
        founded: { type: "string" },
        company_size: { type: "number" },
        revenue: { type: "string" },
        industry: { type: "string" },
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
        title: { type: "string" },
        description: { type: "string" },
        salary_min: { type: "number" },
        salary_max: { type: "number" },
        type: { type: "string" },
        industry: { type: "string" },
        UserId: { type: "number" },
    },
    required: ["name", "about"],
    additionalProperties: false,
}

export default {
    validateCreate: async (reviewData) => {
        const valid = ajv.validate(CreateSchema, reviewData)
        if (!valid)
            return {
                valid,
                errors: ajv.errors,
            }
        return { valid }
    },
    validateUpdate: async (reviewData) => {
        const valid = ajv.validate(UpdateSchema, reviewData)
        if (!valid)
            return {
                valid,
                errors: ajv.errors,
            }
        return { valid }
    },
}
