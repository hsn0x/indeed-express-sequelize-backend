import { faker } from "@faker-js/faker"
import { CompanyModel } from "../models/index.js"
import { randomNumber } from "../utils/index.js"
import users from "./users.js"

export default {
    createFake: async (record) => {
        const fakeCompanies = []
        for (let index = 0; index < record; index++) {
            fakeCompanies.push({
                name: faker.company.companyName(),
                about: faker.company.catchPhrase(),
                ceo: faker.name.findName(),
                founded: faker.date.past().toISOString(),
                company_size: faker.random.numeric(),
                revenue: faker.finance.amount(),
                industry: faker.company.bs(),
                headquarters: faker.address.city(),
                link: faker.internet.url(),

                UserId: randomNumber(1, record),
            })
        }

        await CompanyModel.bulkCreate(fakeCompanies)
        const companies = await CompanyModel.findAll()

        for (
            let companyIndex = 0;
            companyIndex < companies.length;
            companyIndex++
        ) {
            const company = companies[companyIndex]

            await company.createAddress({
                street_address: faker.address.streetAddress(),
                city: faker.address.city(),
                postal_code: faker.address.zipCode(),
                country: faker.address.country(),
                UserId: randomNumber(1, record),
            })
        }
    },
}
