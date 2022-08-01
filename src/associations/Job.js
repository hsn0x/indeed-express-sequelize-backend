import { ReviewModel, UserModel, CompanyModel } from "../models/index.js"

ReviewModel.belongsTo(UserModel)
ReviewModel.belongsTo(CompanyModel)

export default ReviewModel
