import { ResumeLinkModel, ResumeModel } from "../models/index.js"

ResumeLinkModel.belongsTo(ResumeModel, {})

export default ResumeLinkModel
