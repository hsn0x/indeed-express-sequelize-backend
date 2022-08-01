import { AvatarModel, CompanyModel, UserModel } from "../models/index.js"

AvatarModel.belongsTo(UserModel, {
    foreignKey: "avatarableId",
    constraints: false,
})
AvatarModel.belongsTo(CompanyModel, {
    foreignKey: "avatarableId",
    constraints: false,
})

export default AvatarModel
