import sequelize from "../db/sequelize.js"
import SequelizeSlugify from "sequelize-slugify"

import { BOOLEAN, ARRAY, INTEGER, STRING, TEXT, ENUM } from "../db/dataTypes.js"
import { JOB_CONSTANTS } from "../constants/index.js"

const enumPayBy = JOB_CONSTANTS.payBy.map((PayBy) => PayBy.name)
const enumType = JOB_CONSTANTS.type.map((type) => type.name)
const enumSchedule = JOB_CONSTANTS.schedule.map((schedule) => schedule.name)
const enumSize = JOB_CONSTANTS.size.map((size) => size.name)
const enumDelay = JOB_CONSTANTS.delay.map((delay) => delay.name)
const enumSubmitResume = JOB_CONSTANTS.submitResume.map(
    (submitResume) => submitResume.name
)

const Job = sequelize.define("Job", {
    title: {
        type: STRING,
        allowNull: false,
    },
    required_reside: {
        type: BOOLEAN,
    },
    required_reside_location: {
        type: STRING,
    },
    slug: {
        type: STRING,
    },
    description: {
        type: TEXT,
        allowNull: false,
    },
    covid_19_recautions: {
        type: TEXT,
    },

    payBy: {
        type: ENUM(enumPayBy),
    },
    salary_min: {
        type: INTEGER,
    },
    salary_max: {
        type: INTEGER,
    },

    type: {
        type: ENUM(enumType),
    },
    schedule: {
        type: ENUM(enumSchedule),
    },
    size: {
        type: ENUM(enumSize),
    },
    delay: {
        type: ENUM(enumDelay),
    },

    schedule_interviews: {
        type: BOOLEAN,
    },
    submit_resume: {
        type: ENUM(enumSubmitResume),
    },
    send_an_individual_email_update_each_time_someone_applies: {
        type: BOOLEAN,
    },
    send_daily_updates_about_this_job_and_applications_to: {
        type: STRING,
    },
    apply_to_job_at_start_the_conversation: {
        type: BOOLEAN,
    },
    employer_assist: {
        type: BOOLEAN,
    },
    send_pre_recorded_phone_screen: {
        type: BOOLEAN,
    },
    industry: {
        type: STRING,
    },
})

SequelizeSlugify.slugifyModel(Job, { source: ["title"] })

export default Job
