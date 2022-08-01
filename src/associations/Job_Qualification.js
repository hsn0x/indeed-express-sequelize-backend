import { JobModel, Job_QualificationModel, UserModel } from "../models/index.js"

Job_QualificationModel.belongsTo(UserModel)
Job_QualificationModel.belongsTo(JobModel)

export default Job_QualificationModel
