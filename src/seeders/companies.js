import { faker } from "@faker-js/faker"
import { CompanyModel } from "../models/index.js"
import { randomNumber } from "../utils/index.js"

export default {
    createFake: async (record) => {
        const fakeCompanies = []
        for (let index = 0; index < record; index++) {
            fakeCompanies.push({
                name: faker.company.companyName(),
                about: faker.company.catchPhrase(),
                ceo: faker.name.findName(),
                founded: faker.date.past().toISOString(),
                company_size: faker.company.companySize(),
                revenue: faker.finance.amount(),
                industry: faker.company.industry(),
                headquarters: faker.address.city(),
                link: faker.internet.url(),
                UserId: randomNumber(1, record),
            })
        }

        await CompanyModel.bulkCreate(fakeCompanies)
    },
}
