import { companysQueries } from "../queries/index.js"
import { CompanyValidation } from "../validation/index.js"

export default {
    getById: async (req, res) => {
        const id = parseInt(req.params.id)
        const data = await companysQueries.findOneQuery({ where: { id } })
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
        const data = await companysQueries.findAllQuery(
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

        const { rate, title, content, productId } = req.body
        const data = {
            rate: parseInt(rate),
            title,
            content,
            productId: parseInt(productId),
            UserId: user.id,
        }

        const isCompanyValid = CompanyValidation.validateCreate(data)

        if (!isCompanyValid.valid) {
            return res.status(400).json({
                message: "Invalid record data",
                errors: isCompanyValid.errors,
            })
        }

        const recordCreated = await companysQueries.createQuery(data)

        if (recordCreated) {
            return res.status(201).json(recordCreated)
        } else {
            return res.status(500).json({ message: `Faile to create a record` })
        }
    },

    update: async (req, res) => {
        const id = parseInt(req.params.id)
        const { session, user } = req

        const { rate } = req.body

        const data = {
            rate: parseInt(rate),
            UserId: user.id,
        }

        const isCompanyValid = CompanyValidation.validateUpdateCompany(data)

        if (!isCompanyValid) {
            res.status(400).json({ message: "Record not updated" })
        }

        const recordUpdated = await companysQueries.updateQuery(data, {
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
        const recordDeleted = await companysQueries.deleteQuery({ id })
        res.status(200).json(recordDeleted)
    },
}
