import { CompanyScope } from "../scopes/index.js"
import { getPagination, getPagingData } from "../lib/handlePagination.js"

export default {
    findAllQuery: async (filter, scope, { page, size }) => {
        const { limit, offset } = getPagination(page, size)

        const rows = await CompanyScope.scope(scope).findAll({
            limit,
            offset,
            filter,
        })
        const count = await CompanyScope.count()
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
        const record = await CompanyScope.scope(scope).findByPk(id)
        return record
    },
    findOneQuery: async (filter, scope) => {
        const record = await CompanyScope.scope(scope).findOne(filter)
        return record
    },

    create: async (data) => {
        const recordCreated = await CompanyScope.create(data)
        return recordCreated
    },
    update: async (data, filter) => {
        await CompanyScope.update(data, filter)
        const recordUpdated = await CompanyScope.scope(scope).findOne(filter)
        return recordUpdated
    },
    remove: async (filter) => {
        const recordDeleted = await CompanyScope.destroy(filter)
        return recordDeleted
    },
}
