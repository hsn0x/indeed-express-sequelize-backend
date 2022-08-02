import {
    ResumeAdditionalInformationModal,
    ResumeAwardsModel,
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
} from "../models/index.js"

ResumeModel.hasMany(ResumeAdditionalInformationModal, {})
ResumeModel.hasMany(ResumeAwardsModel, {})
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

export default PhoneModel
