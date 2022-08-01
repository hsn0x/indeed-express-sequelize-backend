import Ajv from "ajv"

const ajv = new Ajv()

const CreateSchema = {
    type: "object",
    properties: {
        firstName: { type: "string" },
        lastName: { type: "string" },
        username: { type: "string" },
        description: { type: "string" },
        email: { type: "string" },
        password: { type: "string" },
        passwordHash: { type: "string" },
        passwordSalt: { type: "string" },
        age: { type: "number" },
        gender: { type: "string" },
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

const UpdateSchema = {
    type: "object",
    properties: {
        firstName: { type: "string" },
        lastName: { type: "string" },
        username: { type: "string" },
        description: { type: "string" },
        age: { type: "number" },
        gender: { type: "string" },
    },
    required: ["firstName", "lastName", "username", "age", "gender"],
    additionalProperties: false,
}

const UpdateUserEmailSchema = {
    type: "object",
    properties: {
        email: { type: "string" },
    },
    required: ["email"],
    additionalProperties: false,
}

const UpdateUserPasswordSchema = {
    type: "object",
    properties: {
        newPassword: { type: "string" },
        password: { type: "string" },
        passwordHash: { type: "string" },
        passwordSalt: { type: "string" },
    },
    required: ["newPassword", "password", "passwordHash", "passwordSalt"],
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
    validateUpdateEmail: async (data) => {
        const valid = ajv.validate(UpdateUserEmailSchema, data)
        if (!valid)
            return {
                valid,
                errors: ajv.errors,
            }
        return { valid }
    },
    validateUpdatePassword: async (data) => {
        const valid = ajv.validate(UpdateUserPasswordSchema, data)
        if (!valid)
            return {
                valid,
                errors: ajv.errors,
            }
        return { valid }
    },
}
