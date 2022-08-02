import {
    ResumeAdditionalInformationModel,
    ResumeAwardModel,
    ResumeCertificationModel,
    ResumeGroupModel,
    ResumeLanguageModel,
    ResumeLinkModel,
    ResumeMilitaryServiceModel,
    ResumeModel,
    ResumePatentModel,
    ResumePersonalInformationModel,
    ResumePublicationModel,
    ResumeSkillModel,
    ResumeWorkExperienceModel,
    UserModel,
} from "../models/index.js"

ResumeModel.belongsTo(UserModel, {})

ResumeModel.hasMany(ResumeAdditionalInformationModel, {})
ResumeModel.hasMany(ResumeAwardModel, {})
ResumeModel.hasMany(ResumeCertificationModel, {})
ResumeModel.hasMany(ResumeGroupModel, {})
ResumeModel.hasMany(ResumeLanguageModel, {})
ResumeModel.hasMany(ResumeLinkModel, {})
ResumeModel.hasMany(ResumeMilitaryServiceModel, {})
ResumeModel.hasMany(ResumePatentModel, {})
ResumeModel.hasMany(ResumePersonalInformationModel, {})
ResumeModel.hasMany(ResumePublicationModel, {})
ResumeModel.hasMany(ResumeSkillModel, {})
ResumeModel.hasMany(ResumeWorkExperienceModel, {})

export default ResumeModel
