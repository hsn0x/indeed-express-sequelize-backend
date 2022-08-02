import { ResumeGroupModel, ResumeModel } from "../models/index.js"

ResumeGroupModel.belongsTo(ResumeModel, {})

export default ResumeGroupModel
