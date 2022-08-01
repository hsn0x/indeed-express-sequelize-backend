import Ajv from "ajv"

const ajv = new Ajv()

const CreateSchema = {
    type: "object",
    properties: {
        country: { type: "number" },
        street_address: { type: "number" },
        city: { type: "number" },
        postal_code: { type: "number" },
        UserId: { type: "number" },
    },
    required: [],
    additionalProperties: false,
}

const UpdateSchema = {
    type: "object",
    properties: {
        country: { type: "number" },
        street_address: { type: "number" },
        city: { type: "number" },
        postal_code: { type: "number" },
        UserId: { type: "number" },
    },
    required: [],
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
