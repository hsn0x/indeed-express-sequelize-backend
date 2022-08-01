import { faker } from "@faker-js/faker"
import { JobBenefitModel } from "../models/index.js"
import { randomNumber } from "../utils/index.js"

export default {
    createFake: async (record) => {
        const fakeJobBenefits = []
        for (let index = 0; index < record; index++) {
            for (let index = 0; index < randomNumber(2, 5); index++) {
                fakeJobBenefits.push({
                    name: faker.lorem.sentence(),
                    JobId: randomNumber(1, record),
                    UserId: randomNumber(1, record),
                })
            }
        }

        await JobBenefitModel.bulkCreate(fakeJobBenefits)
    },
}
