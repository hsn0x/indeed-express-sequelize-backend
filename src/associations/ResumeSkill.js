import { ResumeModel, ResumeSkillModel } from "../models/index.js"

ResumeSkillModel.belongsTo(ResumeModel, {})

export default ResumeSkillModel
