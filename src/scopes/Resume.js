import { SENSITIVE_DATA_CONSTANTS } from "../constants/index.js"
import {
    ResumeModel,
    CompanyModel,
    ImageModel,
    UserModel,
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
    ],
})

export default ResumeModel
