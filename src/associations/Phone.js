import {
    PhonePhoneable,
    PhoneModel,
    CompanyModel,
    JobModel,
    UserModel,
} from "../models/index.js"

PhoneModel.belongsToMany(UserModel, {
    through: {
        model: PhonePhoneable,
        unique: false,
    },
    foreignKey: "phoneId",
    constraints: false,
})

PhoneModel.belongsToMany(CompanyModel, {
    through: {
        model: PhonePhoneable,
        unique: false,
    },
    foreignKey: "phoneId",
    constraints: false,
})

PhoneModel.belongsToMany(JobModel, {
    through: {
        model: PhonePhoneable,
        unique: false,
    },
    foreignKey: "phoneId",
    constraints: false,
})

export default PhoneModel
