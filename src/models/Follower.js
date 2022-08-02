import sequelize from "../db/sequelize.js"
import { INTEGER, STRING, TEXT } from "../db/dataTypes.js"
import { Model } from "sequelize"

class Follower extends Model {}

Follower.init(
    {
        followerableId: {
            type: INTEGER,
        },
        followerableType: {
            type: STRING,
        },
    },
    { sequelize, modelName: "Follower" }
)

export default Follower
