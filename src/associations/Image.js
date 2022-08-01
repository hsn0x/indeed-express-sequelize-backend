import { ImageModel, CompanyModel, UserModel } from "../models/index.js"

// belongsTo
ImageModel.belongsTo(UserModel, {
    foreignKey: "imageableId",
    constraints: false,
})
ImageModel.belongsTo(CompanyModel, {
    foreignKey: "imageableId",
    constraints: false,
})

export default ImageModel
