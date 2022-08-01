import { SENSITIVE_DATA_CONSTANTS } from "../constants/index.js"
import { ReviewModel, CompanyModel, Image, User } from "../models/index.js"

ReviewModel.addScope("withAssociations", {
    include: [
        {
            model: User,
            attributes: {
                exclude: [
                    ...SENSITIVE_DATA_CONSTANTS.USER_SENSITIVE_DATA_CONSTANTS,
                ],
            },
        },
        {
            model: CompanyModel,
            include: [{ model: Image }],
        },
    ],
})

export default ReviewModel
