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
                salary_min: faker.random.number(),
                salary_max: faker.random.number(),
                type: faker.name.jobType(),
                industry: faker.company.industry(),
                UserId: randomNumber(1, record),
            })
        }

        await JobModel.bulkCreate(fakeJobs)
    },
}
