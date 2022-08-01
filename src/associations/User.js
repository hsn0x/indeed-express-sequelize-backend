import {
    AvatarModel,
    ReviewModel,
    ImageModel,
    UserModel,
    CompanyModel,
    JobModel,
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

export default UserModel
