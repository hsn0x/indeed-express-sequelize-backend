import {
    JobModel,
    UserModel,
    CompanyModel,
    JobBenefitModel,
    JobQualificationModel,
    AddressAddressable,
    AddressModel,
    PhoneModel,
    PhonePhoneable,
} from "../models/index.js"

JobModel.belongsTo(UserModel)
JobModel.belongsTo(CompanyModel)

JobModel.hasMany(JobBenefitModel)
JobModel.hasMany(JobQualificationModel)

JobModel.belongsToMany(AddressModel, {
    through: {
        model: AddressAddressable,
        unique: false,
        scope: {
            addressableType: "job",
        },
    },
    foreignKey: "addressableId",
    constraints: false,
})
JobModel.belongsToMany(PhoneModel, {
    through: {
        model: PhonePhoneable,
        unique: false,
        scope: {
            phoneableType: "job",
        },
    },
    foreignKey: "phoneableId",
    constraints: false,
})

export default JobModel
