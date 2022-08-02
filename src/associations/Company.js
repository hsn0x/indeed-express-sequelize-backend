import {
    UserModel,
    CompanyModel,
    AddressModel,
    PhoneModel,
    FollowModel,
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
CompanyModel.hasMany(FollowModel, {
    foreignKey: "followableId",
    constraints: false,
    scope: {
        followableType: "company",
    },
})

export default CompanyModel
