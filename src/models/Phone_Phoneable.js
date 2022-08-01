import sequelize from "../db/sequelize.js"
import { INTEGER, STRING, TEXT } from "../db/dataTypes.js"
import { Model } from "sequelize"

class Phone_Phoneable extends Model {}

Phone_Phoneable.init(
    {
        phoneId: {
            type: INTEGER,
            unique: "tt_unique_constraint",
        },
        phoneableId: {
            type: INTEGER,
            unique: "tt_unique_constraint",
            references: null,
        },
        phoneableType: {
            type: STRING,
            unique: "tt_unique_constraint",
        },
    },
    { sequelize, modelName: "phone_phoneable" }
)

export default Phone_Phoneable
