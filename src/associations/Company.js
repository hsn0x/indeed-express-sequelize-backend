import { UserModel, CompanyModel } from "../models/index.js"

CompanyModel.belongsTo(UserModel)

export default CompanyModel
