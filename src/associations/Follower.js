import { FollowerModel, CompanyModel, UserModel } from "../models/index.js"

FollowerModel.belongsTo(UserModel, {
    foreignKey: "followerableId",
    constraints: false,
})

FollowerModel.belongsTo(CompanyModel, {
    foreignKey: "followerableId",
    constraints: false,
})

export default FollowerModel
