import { JobModel, Job_BenefitModel, UserModel } from "../models/index.js"

Job_BenefitModel.belongsTo(UserModel)
Job_BenefitModel.belongsTo(JobModel)

export default Job_BenefitModel
