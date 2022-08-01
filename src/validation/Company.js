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
        revenue: { type: "number" },
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
        name: { type: "string" },
        about: { type: "string" },
        ceo: { type: "string" },
        founded: { type: "string" },
        company_size: { type: "number" },
        revenue: { type: "number" },
        industry: { type: "string" },
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
