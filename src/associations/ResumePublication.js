import { ResumeModel, ResumePublicationModel } from "../models/index.js"

ResumePublicationModel.belongsTo(ResumeModel, {})

export default ResumePublicationModel
