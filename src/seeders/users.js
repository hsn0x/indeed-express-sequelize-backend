import { faker } from "@faker-js/faker"
import { UserModel } from "../models/index.js"
import { usersQueries } from "../queries/index.js"
import { genPassword } from "../lib/passwordUtils.js"

import { ownerConfig } from "../config/index.js"

export default {
    create: async () => {
        const hashedPassword = genPassword(ownerConfig.password)
        const passwordHash = hashedPassword.hash
        const passwordSalt = hashedPassword.salt

        const ADMIN_USER = await UserModel.create({
            firstName: ownerConfig.firstName,
            lastName: ownerConfig.lastName,
            username: ownerConfig.username,
            email: ownerConfig.email,
            description: ownerConfig.description,
            passwordHash,
            passwordSalt,
            age: ownerConfig.age,
            gender: ownerConfig.gender,
        })

        await ADMIN_USER.createImage({
            public_id: faker.random.word(),
            url: faker.image.imageUrl(200, 200, "nature", true),
        })
        await ADMIN_USER.createAvatar({
            public_id: faker.random.word(),
            url: faker.image.imageUrl(200, 200, "people", true),
        })
    },

    createFake: async (record) => {
        const fakeUsers = []
        for (let index = 0; index < record; index++) {
            const hashedPassword = genPassword(faker.internet.password())
            const passwordHash = hashedPassword.hash
            const passwordSalt = hashedPassword.salt

            fakeUsers.push({
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                username: faker.internet.userName(),
                description: faker.lorem.paragraph(),
                email: faker.internet.email(),
                passwordHash,
                passwordSalt,
                age: faker.datatype.number({ min: 18, max: 75 }),
                gender: faker.name.gender(),
            })
        }

        const users = await UserModel.bulkCreate(fakeUsers)

        for (let index = 0; index < record; index++) {
            const user = users[index]
            await user.createImage({
                public_id: faker.random.word(),
                url: faker.image.imageUrl(200, 200, "nature", true),
            })
        }
        for (let index = 0; index < record; index++) {
            const user = users[index]
            await user.createAvatar({
                public_id: faker.random.word(),
                url: faker.image.imageUrl(200, 200, "people", true),
            })
        }
    },
}
