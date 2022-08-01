import { jobsQueries } from "../queries/index.js"
import { JobValidation } from "../validation/index.js"

export default {
    getById: async (req, res) => {
        const id = parseInt(req.params.id)
        const data = await jobsQueries.findOne({ where: { id } })
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
        const data = await jobsQueries.findAll({}, ["withAssociations"], params)
        if (data) {
            res.status(200).json(data)
        } else {
            res.status(404).json({ message: `Records not found` })
        }
    },

    create: async (req, res) => {
        const { session, user } = req

        const {
            title,
            description,
            salaryMin,
            salaryMax,
            type,
            industry,
            CompanyId,
        } = req.body
        const data = {
            title,
            description,
            salary_min: Number(salaryMin),
            salary_max: Number(salaryMax),
            type,
            industry,
            CompanyId: Number(CompanyId),
        }

        const isValid = await JobValidation.validateCreate(data)

        if (!isValid.valid) {
            return res.status(400).json({
                message: "Invalid record data",
                errors: isValid.errors,
            })
        }

        const recordCreated = await jobsQueries.create(data)

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
            title,
            description,
            salary_min,
            salary_max,
            type,
            industry,
            CompanyId,
        } = req.body
        const data = {
            title,
            description,
            salary_min: Number(salary_min),
            salary_max: Number(salary_max),
            type,
            industry,
            CompanyId: Number(CompanyId),
        }

        const isValid = JobValidation.validateUpdate(data)

        if (!isValid) {
            res.status(400).json({ message: "Record not updated" })
        }

        const recordUpdated = await jobsQueries.update(data, {
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
        const recordDeleted = await jobsQueries.delete({ id })
        res.status(200).json(recordDeleted)
    },
}
