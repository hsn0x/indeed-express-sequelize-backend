import { phonesQueries } from "../queries/index.js"
import { PhoneValidation } from "../validation/index.js"

export default {
    getById: async (req, res) => {
        const id = parseInt(req.params.id)
        const data = await phonesQueries.findOne({ where: { id } }, [
            "withAssociations",
        ])
        if (data) {
            res.status(200).json(data)
        } else {
            res.status(404).json({
                message: `Record not found with ID: ${id}`,
            })
        }
    },

    getAll: async (req, res) => {
        const { page, size } = req.query
        const params = {
            page: parseInt(page),
            size: parseInt(size),
        }
        const data = await phonesQueries.findAll(
            {},
            ["withAssociations"],
            params
        )
        if (data) {
            res.status(200).json(data)
        } else {
            res.status(404).json({ message: `Records not found` })
        }
    },

    create: async (req, res) => {
        const { session, user } = req

        const { phone_number } = req.body
        const data = {
            phone_number,
            UserId: user.id,
        }

        const isValid = await PhoneValidation.validateCreate(data)

        if (!isValid.valid) {
            return res.status(400).json({
                message: "Invalid record data",
                errors: isValid.errors,
            })
        }

        const recordCreated = await phonesQueries.create(data)

        if (recordCreated) {
            return res.status(201).json(recordCreated)
        } else {
            return res.status(500).json({ message: `Faile to create a record` })
        }
    },

    update: async (req, res) => {
        const id = parseInt(req.params.id)
        const { session, user } = req

        const { phone_number } = req.body
        const data = {
            phone_number,
            UserId: user.id,
        }

        const isValid = await PhoneValidation.validateUpdate(data)

        if (!isValid) {
            res.status(400).json({ message: "Record not updated" })
        }

        const recordUpdated = await phonesQueries.update(data, {
            id,
        })

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
        const recordDeleted = await phonesQueries.delete({ id })
        res.status(200).json(recordDeleted)
    },
}
