import {
    AvatarModel,
    ReviewModel,
    ImageModel,
    UserModel,
    CompanyModel,
    JobModel,
    AddressModel,
    PhoneModel,
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

UserModel.hasMany(AddressModel, {
    foreignKey: "addressableId",
    constraints: false,
    scope: {
        addressableType: "user",
    },
})
UserModel.hasMany(PhoneModel, {
    foreignKey: "phoneableId",
    constraints: false,
    scope: {
        phoneableType: "user",
    },
})

export default UserModel
