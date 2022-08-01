import {
    JobModel,
    UserModel,
    CompanyModel,
    JobBenefitModel,
    JobQualificationModel,
    AddressModel,
    PhoneModel,
} from "../models/index.js"

JobModel.belongsTo(UserModel)
JobModel.belongsTo(CompanyModel)

JobModel.hasMany(JobBenefitModel)
JobModel.hasMany(JobQualificationModel)

JobModel.hasMany(AddressModel, {
    foreignKey: "addressableId",
    constraints: false,
    scope: {
        addressableType: "user",
    },
})
JobModel.hasMany(PhoneModel, {
    foreignKey: "phoneableId",
    constraints: false,
    scope: {
        phoneableType: "job",
    },
})

export default JobModel
