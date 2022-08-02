import { ResumeModel, ResumeWorkExperienceModel } from "../models/index.js"

ResumeWorkExperienceModel.belongsTo(ResumeModel, {})

export default ResumeWorkExperienceModel
