import { SENSITIVE_DATA_CONSTANTS } from "../constants/index.js"
import { UserModel, ImageModel, AvatarModel } from "../models/index.js"

ImageModel.addScope("withAssociations", {
    include: [
        {
            model: UserModel,
            attributes: {
                exclude: [
                    ...SENSITIVE_DATA_CONSTANTS.USER_SENSITIVE_DATA_CONSTANTS,
                ],
            },
        },
        { model: ImageModel },
        { model: AvatarModel },
    ],
})

export default ImageModel
