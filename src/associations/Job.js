import {
    JobModel,
    UserModel,
    CompanyModel,
    JobBenefitModel,
    JobQualificationModel,
} from "../models/index.js"

JobModel.belongsTo(UserModel)
JobModel.belongsTo(CompanyModel)

JobModel.hasMany(JobBenefitModel)
JobModel.hasMany(JobQualificationModel)

export default JobModel
