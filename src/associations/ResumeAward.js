import { ResumeAwardModel, ResumeModel } from "../models/index.js"

ResumeAwardModel.belongsTo(ResumeModel, {})

export default ResumeAwardModel
