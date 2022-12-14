import { SENSITIVE_DATA_CONSTANTS } from "../constants/index.js"
import { CompanyModel, ReviewModel, UserModel } from "../models/index.js"

ReviewModel.addScope("withAssociations", {
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
    ],
})

export default ReviewModel
