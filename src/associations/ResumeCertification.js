import { ResumeCertificationModel, ResumeModel } from "../models/index.js"

ResumeCertificationModel.belongsTo(ResumeModel, {})

export default ResumeCertificationModel
