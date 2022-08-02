import {
    UserModel,
    CompanyModel,
    AddressModel,
    PhoneModel,
    FollowerModel,
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
CompanyModel.hasMany(FollowerModel, {
    foreignKey: "followerableId",
    constraints: false,
    scope: {
        followerableType: "company",
    },
})

export default CompanyModel
