import { PhoneScope } from "../scopes/index.js"
import { getPagination, getPagingData } from "../lib/handlePagination.js"

export default {
    findAll: async (filter, scope, { page, size }) => {
        const { limit, offset } = getPagination(page, size)

        const rows = await PhoneScope.scope(scope).findAll({
            limit,
            offset,
            filter,
        })
        const count = await PhoneScope.count()
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
        const record = await PhoneScope.scope(scope).findByPk(id)
        return record
    },
    findOne: async (filter, scope) => {
        const record = await PhoneScope.scope(scope).findOne(filter)
        return record
    },

    create: async (data) => {
        const recordCreated = await PhoneScope.create(data)
        return recordCreated
    },
    update: async (data, filter) => {
        await PhoneScope.update(data, filter)
        const recordUpdated = await PhoneScope.scope(scope).findOne(filter)
        return recordUpdated
    },
    remove: async (filter) => {
        const recordDeleted = await PhoneScope.destroy(filter)
        return recordDeleted
    },
}
