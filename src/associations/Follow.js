import {
    FollowModel,
    CompanyModel,
    JobModel,
    UserModel,
} from "../models/index.js"

FollowModel.belongsTo(UserModel, {
    foreignKey: "followableId",
    constraints: false,
})

FollowModel.belongsTo(CompanyModel, {
    foreignKey: "followableId",
    constraints: false,
})

export default FollowModel
