import {
    UserModel,
    CompanyModel,
    AddressAddressable,
    AddressModel,
    PhoneModel,
    PhonePhoneable,
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
CompanyModel.belongsToMany(PhoneModel, {
    through: {
        model: PhonePhoneable,
        unique: false,
        scope: {
            phoneableType: "company",
        },
    },
    foreignKey: "phoneableId",
    constraints: false,
})

export default CompanyModel
