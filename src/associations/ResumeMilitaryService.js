import { ResumeMilitaryServiceModel, ResumeModel } from "../models/index.js"

ResumeMilitaryServiceModel.belongsTo(ResumeModel, {})

export default ResumeMilitaryServiceModel
