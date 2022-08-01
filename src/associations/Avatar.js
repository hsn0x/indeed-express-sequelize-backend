import { Avatar, Company, User } from "../models/index.js"

Avatar.belongsTo(User, {
    foreignKey: "avatarableId",
    constraints: false,
})
Avatar.belongsTo(Company, {
    foreignKey: "avatarableId",
    constraints: false,
})

export default Avatar
