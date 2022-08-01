import { JobModel, UserModel, CompanyModel } from "../models/index.js"

JobModel.belongsTo(UserModel)
JobModel.belongsTo(CompanyModel)

export default JobModel
