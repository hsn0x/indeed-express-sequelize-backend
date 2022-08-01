import { CompanyModel, ReviewModel, UserModel } from "../models/index.js"

ReviewModel.belongsTo(UserModel)
ReviewModel.belongsTo(CompanyModel)

export default ReviewModel
