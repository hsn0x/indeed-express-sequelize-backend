import { SENSITIVE_DATA_CONSTANTS } from "../constants/index.js"
import { CompanyModel, User } from "../models/index.js"

CompanyModel.addScope("withAssociations", {
    include: [
        {
            model: User,
            attributes: {
                exclude: [
                    ...SENSITIVE_DATA_CONSTANTS.USER_SENSITIVE_DATA_CONSTANTS,
                ],
            },
        },
    ],
})

export default CompanyModel
