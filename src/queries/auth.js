import { UserModel } from "../models/index.js"

export default {
    register: async (user) => {
        const registerdUser = await UserModel.create(user)

        delete registerdUser.dataValues.password
        delete registerdUser.dataValues.passwordHash
        delete registerdUser.dataValues.passwordSalt

        return registerdUser
    },
}
