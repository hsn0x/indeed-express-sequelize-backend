import { UserScope } from "../scopes/index.js"

export default {
    findAllUsersQuery: async (filter, scope) => {
        return await UserScope.scope(scope).findAll(filter)
    },
    findByPkQuery: async (id, scope) => {
        return await UserScope.scope(scope).findByPk(id)
    },
    findOneQuery: async (filter, scope) => {
        return await UserScope.scope(scope).findOne(filter)
    },
    createQuery: async (user) => {
        const recordCreated = await UserScope.create(user)
        return recordCreated
    },
    updateQuery: async (user, filter) => {
        const recordUpdated = await UserScope.update(user, filter)
        return recordUpdated
    },
    deleteQuery: async (filter) => {
        const recordDeleted = await UserScope.destroy(filter)
        return recordDeleted
    },
}
