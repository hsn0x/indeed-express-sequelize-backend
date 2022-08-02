import { faker } from "@faker-js/faker"
import { CompanyModel, FollowerModel } from "../models/index.js"
import { randomNumber } from "../utils/index.js"

export default {
    createFake: async (record) => {
        const companies = await CompanyModel.findAll()

        for (
            let companyIndex = 0;
            companyIndex < companies.length;
            companyIndex++
        ) {
            const company = companies[companyIndex]

            for (
                let followerIndex = 0;
                followerIndex < randomNumber(20, 100);
                followerIndex++
            ) {
                await company.createFollower({})
            }
        }
    },
}
