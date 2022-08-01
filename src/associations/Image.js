import { Image, Company, User } from "../models/index.js"

// belongsTo
Image.belongsTo(User, {
    foreignKey: "imageableId",
    constraints: false,
})
Image.belongsTo(Company, {
    foreignKey: "imageableId",
    constraints: false,
})

export default Image
