import { SENSITIVE_DATA_CONSTANTS } from "../constants/index.js"
import {
    JobModel,
    CompanyModel,
    UserModel,
    JobBenefitModel,
    JobQualificationModel,
} from "../models/index.js"

JobModel.addScope("withAssociations", {
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
            model: JobBenefitModel,
        },
        {
            model: JobQualificationModel,
        },
        {
            model: CompanyModel,
        },
    ],
})

export default JobModel
