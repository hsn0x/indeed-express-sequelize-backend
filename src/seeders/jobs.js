import { faker } from "@faker-js/faker"
import { JobModel } from "../models/index.js"
import { randomNumber } from "../utils/index.js"

export default {
    createFake: async (record) => {
        const fakeJobs = []
        for (let index = 0; index < record; index++) {
            fakeJobs.push({
                title: faker.name.jobTitle(),
                description: faker.lorem.paragraph(),
                salary_min: randomNumber(10000, 50000),
                salary_max: randomNumber(50000, 100000),
                type: faker.name.jobType(),
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
