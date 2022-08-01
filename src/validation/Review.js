import Ajv from "ajv"

const ajv = new Ajv()

const CreateSchema = {
    type: "object",
    properties: {
        rate: { type: "number" },
        title: { type: "string" },
        content: { type: "string" },
        CompanyId: { type: "number" },
        UserId: { type: "number" },
    },
    required: ["rate", "title", "CompanyId", "UserId"],
    additionalProperties: false,
}

const UpdateSchema = {
    type: "object",
    properties: {
        rate: { type: "number" },
        title: { type: "string" },
        content: { type: "string" },
        CompanyId: { type: "number" },
        UserId: { type: "number" },
    },
    required: ["rate", "title", "CompanyId", "UserId"],
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
