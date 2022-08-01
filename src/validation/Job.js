import Ajv from "ajv"

const ajv = new Ajv()

const CreateSchema = {
    type: "object",
    properties: {
        title: { type: "string" },
        description: { type: "string" },
        salary_min: { type: "number" },
        salary_max: { type: "number" },
        type: { type: "string" },
        industry: { type: "string" },
        CompanyId: { type: "number" },
        UserId: { type: "number" },
    },
    required: ["title", "description", "CompanyId"],
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
        CompanyId: { type: "number" },
        UserId: { type: "number" },
    },
    required: ["title", "description", "CompanyId"],
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
