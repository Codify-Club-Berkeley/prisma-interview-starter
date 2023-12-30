import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

// numToAdd is an integer
async function seed(numToAdd) {}

// userId and taskId are both passed as integers
async function assign(userId, taskId) {}

// userId is an integer
async function getUser(userId) {}

// minPriority is an integer
async function importantTasks(minPriority) {}

// helpers
function randomName() {
  return faker.person.fullName();
}
function randomDescription() {
  return faker.lorem.sentence();
}
function randomPriority() {
  // Returns a random integer from 1 to 10
  return Math.floor(Math.random() * 10) + 1;
}
