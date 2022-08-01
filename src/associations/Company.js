import {
    UserModel,
    CompanyModel,
    AddressModel,
    PhoneModel,
} from "../models/index.js"

CompanyModel.belongsTo(UserModel)

CompanyModel.hasMany(AddressModel, {
    foreignKey: "addressableId",
    constraints: false,
    scope: {
        addressableType: "company",
    },
})
CompanyModel.hasMany(PhoneModel, {
    foreignKey: "phoneableId",
    constraints: false,
    scope: {
        phoneableType: "company",
    },
})

export default CompanyModel
