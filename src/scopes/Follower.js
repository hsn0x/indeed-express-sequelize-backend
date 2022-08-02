import { SENSITIVE_DATA_CONSTANTS } from "../constants/index.js"
import { CompanyModel, FollowerModel, UserModel } from "../models/index.js"

FollowerModel.addScope("withAssociations", {
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

export default FollowerModel
