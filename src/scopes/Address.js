import { SENSITIVE_DATA_CONSTANTS } from "../constants/index.js"
import {
    AddressModel,
    CompanyModel,
    JobModel,
    UserModel,
} from "../models/index.js"

AddressModel.addScope("withAssociations", {
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

export default AddressModel
