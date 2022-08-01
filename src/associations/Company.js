import {
    UserModel,
    CompanyModel,
    AddressAddressable,
    AddressModel,
} from "../models/index.js"

CompanyModel.belongsTo(UserModel)

CompanyModel.belongsToMany(AddressModel, {
    through: {
        model: AddressAddressable,
        unique: false,
        scope: {
            addressableType: "company",
        },
    },
    foreignKey: "addressableId",
    constraints: false,
})

export default CompanyModel
