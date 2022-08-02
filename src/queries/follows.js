import { FollowScope } from "../scopes/index.js"
import { getPagination, getPagingData } from "../lib/handlePagination.js"

export default {
    findAll: async (filter, scope, { page, size }) => {
        const { limit, offset } = getPagination(page, size)

        const rows = await FollowScope.scope(scope).findAll({
            limit,
            offset,
            filter,
        })
        const count = await FollowScope.count()
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
        const record = await FollowScope.scope(scope).findByPk(id)
        return record
    },
    findOne: async (filter, scope) => {
        const record = await FollowScope.scope(scope).findOne(filter)
        return record
    },

    create: async (data) => {
        const recordCreated = await FollowScope.create(data)
        return recordCreated
    },
    update: async (data, filter) => {
        await FollowScope.update(data, filter)
        const recordUpdated = await FollowScope.scope(scope).findOne(filter)
        return recordUpdated
    },
    remove: async (filter) => {
        const recordDeleted = await FollowScope.destroy(filter)
        return recordDeleted
    },
}
