import { JobModel, JobBenefitModel, UserModel } from "../models/index.js"

JobBenefitModel.belongsTo(UserModel)
JobBenefitModel.belongsTo(JobModel)

export default JobBenefitModel
