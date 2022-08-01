import { UserScope } from "../scopes/index.js"

export default {
    findAll: async (filter, scope) => {
        return await UserScope.scope(scope).findAll(filter)
    },

    findByPk: async (id, scope) => {
        return await UserScope.scope(scope).findByPk(id)
    },
    findOne: async (filter, scope) => {
        return await UserScope.scope(scope).findOne(filter)
    },

    create: async (user) => {
        const recordCreated = await UserScope.create(user)
        return recordCreated
    },
    update: async (user, filter) => {
        const recordUpdated = await UserScope.update(user, filter)
        return recordUpdated
    },
    delete: async (filter) => {
        const recordDeleted = await UserScope.destroy(filter)
        return recordDeleted
    },
}
