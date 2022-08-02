import { ResumeLanguageModel, ResumeModel } from "../models/index.js"

ResumeLanguageModel.belongsTo(ResumeModel, {})

export default ResumeLanguageModel
