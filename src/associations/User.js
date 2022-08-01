import { Avatar, Review, Image, User, Company, Job } from "../models/index.js"

// hasMany
User.hasMany(Image, {
    foreignKey: "imageableId",
    constraints: false,
    scope: {
        imageableType: "user",
    },
})
User.hasMany(Avatar, {
    foreignKey: "avatarableId",
    constraints: false,
    scope: {
        avatarableType: "user",
    },
})

User.hasMany(Job, {})
User.hasMany(Company, {})
User.hasMany(Review, {})

export default User
