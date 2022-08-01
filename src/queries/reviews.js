import { ReviewScope } from "../scopes/index.js"
import { getPagination, getPagingData } from "../lib/handlePagination.js"

export default {
    findAllQuery: async (filter, scope, { page, size }) => {
        const { limit, offset } = getPagination(page, size)

        const rows = await ReviewScope.scope(scope).findAll({
            limit,
            offset,
            filter,
        })
        const count = await ReviewScope.count()
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
        const record = await ReviewScope.scope(scope).findByPk(id)
        return record
    },
    findOneQuery: async (filter, scope) => {
        const record = await ReviewScope.scope(scope).findOne(filter)
        return record
    },

    create: async (data) => {
        const recordCreated = await ReviewScope.create(data)
        return recordCreated
    },
    update: async (data, filter) => {
        await ReviewScope.update(data, filter)
        const recordUpdated = await ReviewScope.scope(scope).findOne(filter)
        return recordUpdated
    },
    remove: async (filter) => {
        const recordDeleted = await ReviewScope.destroy(filter)
        return recordDeleted
    },
}
