import { JobModel, JobQualificationModel, UserModel } from "../models/index.js"

JobQualificationModel.belongsTo(UserModel)
JobQualificationModel.belongsTo(JobModel)

export default JobQualificationModel
