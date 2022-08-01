import { SENSITIVE_DATA_CONSTANTS } from "../constants/index.js"
import { JobModel, CompanyModel, Image, User } from "../models/index.js"

JobModel.addScope("withAssociations", {
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

export default JobModel
