import { SENSITIVE_DATA_CONSTANTS } from "../constants/index.js"
import {
    CompanyModel,
    JobModel,
    PhoneModel,
    UserModel,
} from "../models/index.js"

PhoneModel.addScope("withAssociations", {
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
        },
        {
            model: JobModel,
        },
    ],
})

export default PhoneModel
