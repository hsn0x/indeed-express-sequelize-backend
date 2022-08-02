import { SENSITIVE_DATA_CONSTANTS } from "../constants/index.js"

import {
    ImageModel,
    AvatarModel,
    UserModel,
    ReviewModel,
    CompanyModel,
    JobModel,
    AddressModel,
    PhoneModel,
    FollowModel,
} from "../models/index.js"

import {} from "./index.js"

UserModel.addScope("withoutPassword", {
    attributes: {
        exclude: [...SENSITIVE_DATA_CONSTANTS.USER_SENSITIVE_DATA_CONSTANTS],
    },
})

UserModel.addScope("withAssociations", {
    include: [
        {
            model: ImageModel,
            separate: true,
        },
        {
            model: AvatarModel,
            separate: true,
        },
        {
            model: ReviewModel,
            separate: true,
        },
        {
            model: CompanyModel,
            separate: true,
        },
        {
            model: JobModel,
            separate: true,
        },
        {
            model: AddressModel,
            separate: true,
        },
        {
            model: PhoneModel,
            separate: true,
        },
        {
            model: FollowModel,
            separate: true,
        },
    ],
})

export default UserModel
