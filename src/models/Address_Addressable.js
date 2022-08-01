import sequelize from "../db/sequelize.js"
import { INTEGER, STRING, TEXT } from "../db/dataTypes.js"
import { Model } from "sequelize"

class Address_Addressable extends Model {}

Address_Addressable.init(
    {
        addressId: {
            type: INTEGER,
            unique: "tt_unique_constraint",
        },
        addressableId: {
            type: INTEGER,
            unique: "tt_unique_constraint",
            references: null,
        },
        addressableType: {
            type: STRING,
            unique: "tt_unique_constraint",
        },
    },
    { sequelize, modelName: "address_addressable" }
)

export default Address_Addressable
