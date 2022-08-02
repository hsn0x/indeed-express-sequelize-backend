import { ResumeModel, ResumePersonalInformationModel } from "../models/index.js"

ResumePersonalInformationModel.belongsTo(ResumeModel, {})

export default ResumePersonalInformationModel
