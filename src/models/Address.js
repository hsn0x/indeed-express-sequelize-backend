import sequelize from "../db/sequelize.js"
import { INTEGER, STRING, TEXT } from "../db/dataTypes.js"
import { Model } from "sequelize"

class Address extends Model {}

Address.init(
    {
        country: {
            type: STRING,
        },
        street_address: {
            type: STRING,
        },
        city: {
            type: TEXT,
        },
        postal_code: {
            type: STRING,
        },
    },
    { sequelize, modelName: "address" }
)

export default Address
