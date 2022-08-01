import Ajv from "ajv"

const ajv = new Ajv()

const CreateRegisterSchema = {
    type: "object",
    properties: {
        firstName: { type: "string" },
        lastName: { type: "string" },
        username: { type: "string" },
        email: { type: "string" },
        password: { type: "string" },
        passwordHash: { type: "string" },
        passwordSalt: { type: "string" },
    },
    required: [
        "firstName",
        "lastName",
        "username",
        "email",
        "password",
        "passwordHash",
        "passwordSalt",
    ],
    additionalProperties: false,
}

export default {
    validateRegister: async (data) => {
        const valid = ajv.validate(CreateRegisterSchema, data)
        if (!valid)
            return {
                valid,
                errors: ajv.errors,
            }
        return { valid }
    },
}
