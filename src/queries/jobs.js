import { JobScope } from "../scopes/index.js"
import { getPagination, getPagingData } from "../lib/handlePagination.js"

export default {
    findAllQuery: async (filter, scope, { page, size }) => {
        const { limit, offset } = getPagination(page, size)

        const rows = await JobScope.scope(scope).findAll({
            limit,
            offset,
            filter,
        })
        const count = await JobScope.count()
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

    findByPkQuery: async (id, scope) => {
        const record = await JobScope.scope(scope).findByPk(id)
        return record
    },
    findOneQuery: async (filter, scope) => {
        const record = await JobScope.scope(scope).findOne(filter)
        return record
    },

    create: async (data) => {
        const recordCreated = await JobScope.create(data)
        return recordCreated
    },
    update: async (data, filter) => {
        await JobScope.update(data, filter)
        const recordUpdated = await JobScope.scope(scope).findOne(filter)
        return recordUpdated
    },
    remove: async (filter) => {
        const recordDeleted = await JobScope.destroy(filter)
        return recordDeleted
    },
}
