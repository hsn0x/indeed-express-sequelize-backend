import {
    AddressAddressable,
    AddressModel,
    CompanyModel,
    JobModel,
    UserModel,
} from "../models/index.js"

AddressModel.belongsToMany(UserModel, {
    through: {
        model: AddressAddressable,
        unique: false,
    },
    foreignKey: "addressId",
    constraints: false,
})

AddressModel.belongsToMany(CompanyModel, {
    through: {
        model: AddressAddressable,
        unique: false,
    },
    foreignKey: "addressId",
    constraints: false,
})

AddressModel.belongsToMany(JobModel, {
    through: {
        model: AddressAddressable,
        unique: false,
    },
    foreignKey: "addressId",
    constraints: false,
})

export default AddressModel
