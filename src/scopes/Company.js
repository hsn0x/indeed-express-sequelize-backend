import { SENSITIVE_DATA_CONSTANTS } from "../constants/index.js"
import { CompanyModel, UserModel } from "../models/index.js"

CompanyModel.addScope("withAssociations", {
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

export default CompanyModel
