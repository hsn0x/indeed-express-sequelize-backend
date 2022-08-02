import { faker } from "@faker-js/faker"
import { ResumeModel } from "../models/index.js"
import { randomNumber } from "../utils/index.js"

export default {
    createFake: async (record) => {
        const fakeResumes = []
        for (let index = 0; index < record; index++) {
            fakeResumes.push({
                UserId: randomNumber(1, record),
            })
        }

        await ResumeModel.bulkCreate(fakeResumes)
        const resumes = await ResumeModel.findAll()

        for (let resumeIndex = 0; resumeIndex < resumes.length; resumeIndex++) {
            const resume = resumes[resumeIndex]
            await resume.createResumeAdditionalInformation({
                content: faker.lorem.paragraph(),
            })
            await resume.createResumeAward({
                title: faker.lorem.sentence(),
                date_awarded_month: faker.date
                    .future()
                    .toISOString()
                    .split("T")[0]
                    .split("-")[1],
                date_awarded_year: faker.date
                    .future()
                    .toISOString()
                    .split("T")[0]
                    .split("-")[0],
                description: faker.lorem.sentences(),
            })
            await resume.createResumeCertification({
                title: faker.lorem.sentence(),
                time_period_not_expire: faker.datatype.boolean(),
                time_period_from: faker.date.past().toISOString().split("T")[0],
                time_period_to: faker.date.future().toISOString().split("T")[0],
                description: faker.lorem.sentences(),
            })
            await resume.createResumeGroup({
                title: faker.lorem.sentence(),
                time_period_not_expire: faker.datatype.boolean(),
                time_period_from: faker.date.past().toISOString().split("T")[0],
                time_period_to: faker.date.future().toISOString().split("T")[0],
                description: faker.lorem.sentences(),
            })
            await resume.createResumeLanguage({
                name: faker.lorem.sentence(),
                proficiency: faker.lorem.sentences(),
            })
            await resume.createResumeLink({
                url: faker.internet.url(),
            })
            await resume.createResumeMilitaryService({
                country_of_service: faker.address.country(),
                branch: faker.random.word(),
                rank: faker.random.word(),
                currently_serving: faker.datatype.boolean(),
            })
            await resume.createResumePatent({
                title: faker.lorem.sentence(),
                patent_number: faker.phone.phoneNumber(),
                url: faker.internet.url(),
                date_awarded_month: faker.date
                    .future()
                    .toISOString()
                    .split("T")[0]
                    .split("-")[1],
                date_awarded_year: faker.date
                    .future()
                    .toISOString()
                    .split("T")[0]
                    .split("-")[0],
                description: faker.lorem.sentences(),
            })
            await resume.createResumePersonalInformation({
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                headline: faker.name.jobTitle(),
                summary: faker.lorem.sentences(),
                city: faker.address.city(),
                postal_code: faker.address.zipCode(),
                relocation: faker.datatype.boolean(),
                employment_eligibility: [
                    "authorized_to_work_in_the_us_for_any_employer",
                    "sponsorship_required_to_work_in_the_us",
                    "not_specified",
                ][randomNumber(0, 2)],
            })
            await resume.createResumePublication({
                title: faker.lorem.sentence(),
                url: faker.internet.url(),
                date_awarded_month: faker.date
                    .future()
                    .toISOString()
                    .split("T")[0]
                    .split("-")[1],
                date_awarded_year: faker.date
                    .future()
                    .toISOString()
                    .split("T")[0]
                    .split("-")[0],
                description: faker.lorem.sentences(),
            })
            await resume.createResumeSkill({
                name: faker.lorem.word(),
                year_of_experience: [
                    "less than 1 year",
                    "1 year",
                    "2 years",
                    "3 years",
                    "4 years",
                    "5 years",
                    "6 years",
                    "7 years",
                    "8 years",
                    "9 years",
                    "10+ years",
                ][randomNumber(0, 9)],
            })
            await resume.createResumeWorkExperience({
                job_title: faker.name.jobTitle(),
                company: faker.company.companyName(),
                city: faker.address.city(),
                time_period_work_here: faker.datatype.boolean(),
                time_period_from: faker.date.past().toISOString().split("T")[0],
                time_period_to: faker.date.future().toISOString().split("T")[0],
                description: faker.lorem.sentences(),
            })
        }
    },
}
