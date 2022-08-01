import { companiesQueries } from "../queries/index.js"
import { CompanyValidation } from "../validation/index.js"

export default {
    getById: async (req, res) => {
        const id = parseInt(req.params.id)
        const data = await companiesQueries.findOne({ where: { id } }, [
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
        const data = await companiesQueries.findAll(
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

        const {
            name,
            about,
            ceo,
            founded,
            companySize,
            revenue,
            industry,
            headquarters,
            link,
        } = req.body
        const data = {
            name,
            about,
            ceo,
            founded,
            company_size: Number(companySize),
            revenue: Number(revenue),
            industry,
            headquarters,
            link,
            UserId: user.id,
        }

        const isValid = await CompanyValidation.validateCreate(data)
        if (!isValid.valid) {
            return res.status(400).json({
                message: "Invalid record data",
                errors: isValid.errors,
            })
        }

        const recordCreated = await companiesQueries.create(data)

        if (recordCreated) {
            return res.status(201).json(recordCreated)
        } else {
            return res.status(500).json({ message: `Faile to create a record` })
        }
    },

    update: async (req, res) => {
        const id = parseInt(req.params.id)
        const { session, user } = req

        const {
            name,
            about,
            ceo,
            founded,
            companySize,
            revenue,
            industry,
            headquarters,
            link,
        } = req.body
        const data = {
            name,
            about,
            ceo,
            founded,
            company_size: Number(companySize),
            revenue: Number(revenue),
            industry,
            headquarters,
            link,
            UserId: user.id,
        }

        const isValid = await CompanyValidation.validateUpdate(data)

        if (!isValid) {
            res.status(400).json({ message: "Record not updated" })
        }

        const recordUpdated = await companiesQueries.update(data, {
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
        const recordDeleted = await companiesQueries.delete({ id })
        res.status(200).json(recordDeleted)
    },
}
