import {
    ResumeAdditionalInformationModel,
    ResumeModel,
} from "../models/index.js"

ResumeAdditionalInformationModel.belongsTo(ResumeModel, {})

export default ResumeAdditionalInformationModel
