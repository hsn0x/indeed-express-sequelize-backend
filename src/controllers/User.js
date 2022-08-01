import { genPassword, passwordMatch } from "../lib/passwordUtils.js"
import { usersQueries } from "../queries/index.js"
import { UserValidation } from "../validation/index.js"

export default {
    getAll: async (req, res) => {
        const records = await usersQueries.findAll({}, [
            "withAssociations",
            "withoutPassword",
        ])

        if (records) {
            res.status(200).json({ records })
        } else {
            res.status(500).json({ message: `Faile to get records` })
        }
    },

    getById: async (req, res) => {
        const id = parseInt(req.params.id)
        const record = await usersQueries.findOne({ where: { id } }, [
            "withAssociations",
            "withoutPassword",
        ])

        if (record) {
            res.status(200).json(record)
        } else {
            res.status(404).json({ message: `Record not found with ID: ${id}` })
        }
    },
    getByUsername: async (req, res) => {
        const username = req.params.username
        const record = await usersQueries.findOne({ where: { username } }, [
            "withAssociations",
            "withoutPassword",
        ])

        if (record) {
            res.status(200).json(record)
        } else {
            res.status(404).json({
                message: `Record not found with ID: ${username}`,
            })
        }
    },
    getByEmail: async (req, res) => {
        const email = parseInt(req.params.email)
        const record = await usersQueries.findOne({ where: { email } }, [
            "withAssociations",
            "withoutPassword",
        ])

        if (record) {
            res.status(200).json(record)
        } else {
            res.status(404).json({
                message: `Record not found with email: ${email}`,
            })
        }
    },

    create: async (req, res, next) => {
        const {
            firstName,
            lastName,
            username,
            description,
            email,
            password,
            age,
            gender,
        } = req.body

        const data = {
            firstName,
            lastName,
            username,
            description,
            email,
            password,
            gender,
        }
        data.age = Number(age)

        const hashedPassword = genPassword(data.password)
        data.passwordHash = hashedPassword.hash
        data.passwordSalt = hashedPassword.salt

        const isValid = UserValidation.validateCreate(data)

        if (!isValid.valid) {
            return res.status(401).json({
                valid: isValid.valid,
                errors: isValid.errors,
            })
        }

        const record = await usersQueries.create(data)

        if (record) {
            res.status(201).json(record)
        } else {
            res.status(500).json({
                message: `Faile to create a record`,
            })
        }
    },
    update: async (req, res) => {
        const id = parseInt(req.params.id)
        const { session, user } = req

        const { firstName, lastName, username, email, password, age, gender } =
            req.body
        const data = {
            firstName,
            lastName,
            username,
            age,
            gender,
        }

        data.age = Number(data.age)

        const isValid = UserValidation.validateUpdate(data)

        if (!isValid.valid) {
            return res.status(401).json({
                valid: isValid.valid,
                errors: isValid.errors,
            })
        }

        const recordUpdated = await usersQueries.update(data, { id })
        if (recordUpdated) {
            res.status(200).json({
                message: `Record updated with ID: ${user.id}`,
                recordUpdated,
            })
        } else {
            res.status(500).json({
                message: `Faile to update a record, ${id}`,
            })
        }
    },
    updateEmail: async (req, res) => {
        const id = parseInt(req.params.id)
        const { session, user } = req

        const { email } = req.body
        const data = {
            email,
        }

        const isValid = UserValidation.validateUpdateEmail(data)

        if (!isValid.valid) {
            return res.status(401).json({
                valid: isValid.valid,
                errors: isValid.errors,
            })
        }
        const recordUpdated = await usersQueries.update(data, { id })
        if (recordUpdated) {
            res.status(200).json({
                message: `User updated with ID: ${user.id}`,
                data: recordUpdated,
            })
        } else {
            res.status(500).json({
                message: `Faile to update a record, ${id}`,
            })
        }
    },
    updatePassword: async (req, res) => {
        const id = parseInt(req.params.id)
        const { session, user } = req
        if (user.id !== id) {
            return res.status(401).json({
                message: `You are not authorized to update this record`,
            })
        }

        const currentRecord = await usersQueries.findOne({ where: { id } })
        if (!currentRecord) {
            return res.status(404).json({
                message: `User not found with ID: ${id}`,
            })
        }

        const { password, newPassword } = req.body
        const data = {
            password,
            newPassword,
        }

        /**
         * Check if the current password is valid
         */
        let isValid = UserValidation.validateUpdatePassword({
            ...data,
            passwordHash: currentRecord.passwordHash,
            passwordSalt: currentRecord.passwordSalt,
        })
        if (!isValid.valid) {
            return res.status(401).json({
                valid: isValid.valid,
                errors: isValid.errors,
            })
        }

        const newHashedPassword = genPassword(data.newPassword)
        data.passwordHash = newHashedPassword.hash
        data.passwordSalt = newHashedPassword.salt

        /**
         * Check if the current password is valid
         */
        isValid = UserValidation.validateUpdatePassword(data)
        if (!isValid.valid) {
            return res.status(401).json({
                valid: isValid.valid,
                errors: isValid.errors,
            })
        }

        /**
         * Check if the password is correct
         */

        const isPasswordMatch = passwordMatch(
            data.password,
            currentRecord.passwordHash,
            currentRecord.passwordSalt
        )
        if (!isPasswordMatch) {
            return res.status(401).json({
                message: `Password is incorrect`,
            })
        }

        data.password = data.newPassword
        const recordUpdated = await usersQueries.update(data, { id })
        if (recordUpdated) {
            res.status(200).json(recordUpdated)
        } else {
            res.status(500).json({
                message: `Faile to update a record, ${id}`,
            })
        }
    },
    remove: async (req, res) => {
        const id = parseInt(req.params.id)
        const recordDeleted = await usersQueries.delete({ id })
        res.status(200).json(recordDeleted)
    },
}
