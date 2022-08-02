import { SENSITIVE_DATA_CONSTANTS } from "../constants/index.js"
import {
    AddressModel,
    CompanyModel,
    FollowModel,
    PhoneModel,
    UserModel,
} from "../models/index.js"

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
        {
            model: AddressModel,
        },
        {
            model: PhoneModel,
        },
        {
            model: FollowModel,
        },
    ],
})

export default CompanyModel
