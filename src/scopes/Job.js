import { SENSITIVE_DATA_CONSTANTS } from "../constants/index.js"
import {
    JobModel,
    CompanyModel,
    ImageModel,
    UserModel,
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
            model: CompanyModel,
            include: [{ model: ImageModel }],
        },
    ],
})

export default JobModel
