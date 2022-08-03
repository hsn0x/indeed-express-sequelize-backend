import sequelize from "../db/sequelize.js"
import SequelizeSlugify from "sequelize-slugify"

import { ARRAY, INTEGER, STRING, TEXT, ENUM, BOOLEAN } from "../db/dataTypes.js"
import { JOB_CONSTANTS } from "../constants/index.js"

const enumEducation = JOB_CONSTANTS.qualifications
    .find((qualification) => qualification.name === "Education")
    .values.map((value) => value.name)
const enumExperience = JOB_CONSTANTS.qualifications
    .find((qualification) => qualification.name === "Experience")
    .values.map((value) => value.name)
const enumSecurityClearance = JOB_CONSTANTS.qualifications
    .find((qualification) => qualification.name === "Security clearance")
    .values.map((value) => value.name)
const enumShiftAvailability = JOB_CONSTANTS.qualifications
    .find((qualification) => qualification.name === "Shift Availability")
    .values.map((value) => value.name)
const enumSkillsTest = JOB_CONSTANTS.qualifications
    .find((qualification) => qualification.name === "Skills test")
    .values.map((value) => value.name)
const enumWillingnessToTravel = JOB_CONSTANTS.qualifications
    .find((qualification) => qualification.name === "Willingness to travel")
    .values.map((value) => value.name)

const JobQualifications = sequelize.define("JobQualifications", {
    name: {
        type: STRING,
        allowNull: false,
    },
    education: {
        type: ENUM(enumEducation),
    },
    experience: {
        type: ENUM(enumExperience),
    },
    interview_ability: {
        type: BOOLEAN,
    },
    security_clearance: {
        type: ENUM(enumSecurityClearance),
    },
    shift_availability: {
        type: ENUM(enumShiftAvailability),
    },
    skills_test: {
        type: ENUM(enumSkillsTest),
    },
    vaccine_requirement: {
        type: BOOLEAN,
    },
    willingness_to_travel: {
        type: ENUM(enumWillingnessToTravel),
    },
    work_authorization: {
        type: BOOLEAN,
    },
})

export default JobQualifications
