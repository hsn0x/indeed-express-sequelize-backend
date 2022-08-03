import { faker } from "@faker-js/faker"
import { JOB_CONSTANTS } from "../constants/index.js"
import { JobModel } from "../models/index.js"
import { randomNumber } from "../utils/index.js"

const enumPayBy = JOB_CONSTANTS.payBy.map((PayBy) => PayBy.name)
const enumType = JOB_CONSTANTS.type.map((type) => type.name)
const enumSchedule = JOB_CONSTANTS.schedule.map((schedule) => schedule.name)
const enumSize = JOB_CONSTANTS.size.map((size) => size.name)
const enumDelay = JOB_CONSTANTS.delay.map((delay) => delay.name)
const enumSubmitResume = JOB_CONSTANTS.submitResume.map(
    (submitResume) => submitResume.name
)

export default {
    createFake: async (record) => {
        const fakeJobs = []
        for (let index = 0; index < record; index++) {
            const randomRequiredReside = faker.datatype.boolean()
            fakeJobs.push({
                title: faker.name.jobTitle(),
                description: faker.lorem.paragraph(),
                covid_19_recautions: faker.lorem.sentences(),

                required_reside: randomRequiredReside,
                required_reside_location: randomRequiredReside
                    ? faker.address.city()
                    : null,

                payBy: enumPayBy[randomNumber(0, enumPayBy.length - 1)],
                salary_min: randomNumber(10000, 50000),
                salary_max: randomNumber(50000, 100000),

                type: enumType[randomNumber(0, enumType.length - 1)],
                schedule:
                    enumSchedule[randomNumber(0, enumSchedule.length - 1)],
                size: enumSize[randomNumber(0, enumSize.length - 1)],
                delay: enumDelay[randomNumber(0, enumDelay.length - 1)],

                schedule_interviews: faker.datatype.boolean(),
                submit_resume:
                    enumSubmitResume[
                        randomNumber(0, enumSubmitResume.length - 1)
                    ],
                send_an_individual_email_update_each_time_someone_applies:
                    faker.datatype.boolean(),

                send_daily_updates_about_this_job_and_applications_to:
                    JSON.stringify(faker.internet.email()),
                apply_to_job_at_start_the_conversation:
                    faker.datatype.boolean(),
                employer_assist: faker.datatype.boolean(),
                send_pre_recorded_phone_screen: faker.datatype.boolean(),

                industry: faker.company.bs(),
                CompanyId: randomNumber(1, record),
                UserId: randomNumber(1, record),
            })
        }

        await JobModel.bulkCreate(fakeJobs)
        const jobs = await JobModel.findAll()

        for (let jobIndex = 0; jobIndex < jobs.length; jobIndex++) {
            const job = jobs[jobIndex]

            await job.createAddress({
                street_address: faker.address.streetAddress(),
                city: faker.address.city(),
                postal_code: faker.address.zipCode(),
                country: faker.address.country(),
                UserId: randomNumber(1, record),
            })
            await job.createPhone({
                phone_number: faker.phone.phoneNumber(),
            })
        }
    },
}
