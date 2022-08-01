import { faker } from "@faker-js/faker"
import { JobQualificationModel } from "../models/index.js"
import { randomNumber } from "../utils/index.js"

export default {
    createFake: async (record) => {
        const fakeJobQualifications = []
        for (let index = 0; index < record; index++) {
            for (let index = 0; index < randomNumber(2, 5); index++) {
                fakeJobQualifications.push({
                    name: faker.lorem.sentence(),
                    JobId: randomNumber(1, record),
                    UserId: randomNumber(1, record),
                })
            }
        }

        await JobQualificationModel.bulkCreate(fakeJobQualifications)
    },
}
