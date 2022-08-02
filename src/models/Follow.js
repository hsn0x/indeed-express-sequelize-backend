import sequelize from "../db/sequelize.js"
import { INTEGER, STRING, TEXT } from "../db/dataTypes.js"
import { Model } from "sequelize"

class Follow extends Model {}

Follow.init(
    {
        followableId: {
            type: INTEGER,
        },
        followableType: {
            type: STRING,
        },
    },
    { sequelize, modelName: "Follow" }
)

export default Follow
