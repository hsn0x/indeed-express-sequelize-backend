import {
    AddressModel,
    CompanyModel,
    JobModel,
    UserModel,
} from "../models/index.js"

AddressModel.belongsTo(UserModel, {
    foreignKey: "addressableId",
    constraints: false,
})

AddressModel.belongsTo(CompanyModel, {
    foreignKey: "addressableId",
    constraints: false,
})

AddressModel.belongsTo(JobModel, {
    foreignKey: "addressableId",
    constraints: false,
})

export default AddressModel
