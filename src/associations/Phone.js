import {
    PhoneModel,
    CompanyModel,
    JobModel,
    UserModel,
} from "../models/index.js"

PhoneModel.belongsTo(UserModel, {
    foreignKey: "phoneableId",
    constraints: false,
})

PhoneModel.belongsTo(CompanyModel, {
    foreignKey: "phoneableId",
    constraints: false,
})

PhoneModel.belongsTo(JobModel, {
    foreignKey: "phoneableId",
    constraints: false,
})

export default PhoneModel
