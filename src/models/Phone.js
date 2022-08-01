import sequelize from "../db/sequelize.js"
import { INTEGER, STRING, TEXT } from "../db/dataTypes.js"
import { Model } from "sequelize"

class Phone extends Model {}

Phone.init(
    {
        number: {
            type: STRING,
        },
    },
    { sequelize, modelName: "phone" }
)

export default Phone
