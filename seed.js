// Seed script for the database

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
import { faker } from "@faker-js/faker";

// Seed the database
for (let i = 0; i < 20; i++) {
  await prisma.user.create({
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(),
  });
}

for (let i = 0; i < 10; i++) {
  await prisma.project.create({
    name: "Project" + faker.lorem.sentence(),
  });
}
