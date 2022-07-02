import { faker } from "@faker-js/faker";
import { Category } from "../models/index.js";
import slugify from "slugify";
import { randomNumber } from "../utils/index.js";

export const createFakeCategories = async (record) => {
    const fakeCategories = [];
    for (let index = 0; index < record * 3; index++) {
        const name = faker.random.word() + faker.random.word();
        fakeCategories.push({
            name,
            description: faker.lorem.sentence(),
            parentId: randomNumber(0, 2),
            UserId: 1,
        });
    }

    const categories = await Category.bulkCreate(fakeCategories);

    for (let index = 0; index < record; index++) {
        const category = categories[index];
        await category.createImage({
            public_id: faker.random.word(),
            url: faker.image.image(),
        });
    }
    for (let index = 0; index < record; index++) {
        const category = categories[index];
        await category.createAvatar({
            public_id: faker.random.word(),
            url: faker.image.avatar(),
        });
    }
};
