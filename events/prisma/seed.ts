import { EventStatus, PrismaClient, SlotStatus } from '@prisma/client'
import { users, companies } from './seed/data';
import { faker } from '@faker-js/faker';
import slugify from 'slugify';
const prisma = new PrismaClient()

function fakerEvent() {
  const title = faker.name.title()

  return {
    name: title,
    slug: slugify(title, {lower: true, strict: true}),
    location: faker.address.cityName(),
    organizer: faker.company.companyName(),
    date: new Date(faker.date.soon(10)),
    description: faker.commerce.productDescription(),
    price: faker.datatype.float({min: 10, max: 200, precision: 0.01}),
    seats: faker.datatype.float({min: 100, max: 500, precision: 1}),
    userId: users.esgi.julien,
    companyId: companies.esgi,
    status: EventStatus.PUBLISHED,
  }
};

async function main() {
  for (let i = 0; i < 100; i++) {
    const event = fakerEvent();

    await prisma.event.upsert({
      where: { slug: event.slug },
      update: {},
      create: event
    });
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
