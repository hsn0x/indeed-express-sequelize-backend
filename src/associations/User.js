import {
    AvatarModel,
    ReviewModel,
    ImageModel,
    UserModel,
    CompanyModel,
    JobModel,
    AddressModel,
    PhoneModel,
    AddressAddressable,
    PhonePhoneable,
} from "../models/index.js"

// hasMany
UserModel.hasMany(ImageModel, {
    foreignKey: "imageableId",
    constraints: false,
    scope: {
        imageableType: "user",
    },
})
UserModel.hasMany(AvatarModel, {
    foreignKey: "avatarableId",
    constraints: false,
    scope: {
        avatarableType: "user",
    },
})

UserModel.hasMany(JobModel, {})
UserModel.hasMany(CompanyModel, {})
UserModel.hasMany(ReviewModel, {})

UserModel.belongsToMany(AddressModel, {
    through: {
        model: AddressAddressable,
        unique: false,
        scope: {
            addressableType: "user",
        },
    },
    foreignKey: "addressableId",
    constraints: false,
})
UserModel.belongsToMany(PhoneModel, {
    through: {
        model: PhonePhoneable,
        unique: false,
        scope: {
            phoneableType: "user",
        },
    },
    foreignKey: "phoneableId",
    constraints: false,
})

export default UserModel
