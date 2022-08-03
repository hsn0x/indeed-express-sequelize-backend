import { faker } from "@faker-js/faker"
import { COMPANY_CONSTANTS } from "../constants/index.js"
import { CompanyModel } from "../models/index.js"
import { randomNumber } from "../utils/index.js"
import users from "./users.js"

export default {
    createFake: async (record) => {
        const fakeCompanies = []
        const industries = COMPANY_CONSTANTS.industries

        for (let index = 0; index < record; index++) {
            const randomIndustry =
                industries[randomNumber(0, industries.length - 1)]
            const randomSubIndustry =
                randomIndustry.children[
                    randomNumber(0, randomIndustry.children.length - 1)
                ]

            const fakeCompany = {
                name: faker.company.companyName(),
                about: faker.company.catchPhrase(),
                ceo: faker.name.findName(),
                founded: faker.date.past().toISOString(),
                company_size: faker.random.numeric(),
                revenue: faker.finance.amount(),

                industry: randomIndustry.name,
                sub_industry: randomSubIndustry ? randomSubIndustry.name : null,

                headquarters: faker.address.city(),
                link: faker.internet.url(),

                UserId: randomNumber(1, record),
            }

            fakeCompanies.push(fakeCompany)
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

            await company.createPhone({
                phone_number: faker.phone.phoneNumber(),
                UserId: randomNumber(1, record),
            })
        }
    },
}
