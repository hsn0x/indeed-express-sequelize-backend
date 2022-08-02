import { SENSITIVE_DATA_CONSTANTS } from "../constants/index.js"
import {
    ResumeModel,
    CompanyModel,
    ImageModel,
    UserModel,
    ResumeLinkModel,
    ResumeGroupModel,
    ResumeAdditionalInformationModal,
    ResumeAwardsModel,
    ResumeCertificationModel,
    ResumeLanguageModel,
    ResumeMilitaryServiceModel,
    ResumePatentModel,
    ResumePersonalInformationModel,
    ResumePublicationModel,
    ResumeSkillModel,
    ResumeWorkExperienceModel,
} from "../models/index.js"

ResumeModel.addScope("withAssociations", {
    include: [
        {
            model: UserModel,
            attributes: {
                exclude: [
                    ...SENSITIVE_DATA_CONSTANTS.USER_SENSITIVE_DATA_CONSTANTS,
                ],
            },
        },
        {
            model: ResumeAdditionalInformationModal,
        },
        {
            model: ResumeAwardsModel,
        },
        {
            model: ResumeCertificationModel,
        },
        {
            model: ResumeGroupModel,
        },
        {
            model: ResumeLanguageModel,
        },
        {
            model: ResumeLinkModel,
        },
        {
            model: ResumeMilitaryServiceModel,
        },
        {
            model: ResumePatentModel,
        },
        {
            model: ResumePersonalInformationModel,
        },
        {
            model: ResumePublicationModel,
        },
        {
            model: ResumeSkillModel,
        },
        {
            model: ResumeWorkExperienceModel,
        },
    ],
})

export default ResumeModel
