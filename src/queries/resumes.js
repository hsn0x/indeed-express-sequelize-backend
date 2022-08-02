import { ResumeScope } from "../scopes/index.js"
import { getPagination, getPagingData } from "../lib/handlePagination.js"

export default {
    findAll: async (filter, scope, { page, size }) => {
        const { limit, offset } = getPagination(page, size)

        const rows = await ResumeScope.scope(scope).findAll({
            limit,
            offset,
            filter,
        })
        const count = await ResumeScope.count()
        const { totalItems, totalPages, currentPage } = getPagingData(
            count,
            page,
            limit
        )
        return {
            totalItems,
            totalPages,
            currentPage,
            count,
            rows,
        }
    },

    findByPk: async (id, scope) => {
        const record = await ResumeScope.scope(scope).findByPk(id)
        return record
    },
    findOne: async (filter, scope) => {
        const record = await ResumeScope.scope(scope).findOne(filter)
        return record
    },

    create: async (data) => {
        const recordCreated = await ResumeScope.create(data)
        return recordCreated
    },
    update: async (data, filter) => {
        await ResumeScope.update(data, filter)
        const recordUpdated = await ResumeScope.scope(scope).findOne(filter)
        return recordUpdated
    },
    remove: async (filter) => {
        const recordDeleted = await ResumeScope.destroy(filter)
        return recordDeleted
    },
}
