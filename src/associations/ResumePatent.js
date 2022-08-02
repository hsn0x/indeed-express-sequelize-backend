import { ResumeModel, ResumePatentModel } from "../models/index.js"

ResumePatentModel.belongsTo(ResumeModel, {})

export default ResumePatentModel
