import { EventStatus, PrismaClient, SlotStatus } from '@prisma/client'
import { users, companies } from './seed/data';
const prisma = new PrismaClient()

async function importData() {
  return [
    {
      where: { slug: 'never-ending-party' },
      update: {},
      create: {
        name: 'NEVER ENDING PARTY',
        slug: 'never-ending-party',
        location: 'Paris',
        organizer: 'MESS',
        date: new Date('2022-02-7'),
        description: 'L\'adresse sera transmise par mail le jour de l\'événement !',
        price: 31.80,
        seats: 100,
        userId: users.wyloo.pierre,
        companyId: companies.wyloo,
        status: EventStatus.PUBLISHED,
        slots: {
          create: [
            {
              transaction: '4e44f54d6',
              quantity: 10,
              userId: users.clients.jammy,
              status: SlotStatus.COMPLETED
            },
            {
              transaction: '',
              quantity: 2,
              userId: users.clients.thierry,
              status: SlotStatus.CANCELED
            },
            {
              transaction: '',
              quantity: 8,
              userId: users.clients.clara,
              status: SlotStatus.PENDING
            },
            {
              transaction: '4e44f54d6',
              quantity: 7,
              userId: users.clients.julie,
              status: SlotStatus.COMPLETED
            },
            {
              transaction: '4e44f54d6',
              quantity: 1,
              userId: users.clients.damso,
              status: SlotStatus.COMPLETED
            },
          ],
        },
      },
    },
    {
      where: { slug: 'flashback-2' },
      update: {},
      create: {
        name: 'Flashback #2',
        slug: 'flashback-2',
        location: 'Paris',
        organizer: 'La Phoenix Team / Family',
        date: new Date('2022-02-8'),
        description: 'La Phoenix Team / Family vous propose son nouveau concept de soirées qui vous ramèneront dans le passé.',
        price: 5.99,
        seats: 250,
        userId: users.esgi.julien,
        companyId: companies.esgi,
        status: EventStatus.PUBLISHED,
        slots: {
          create: [
            {
              transaction: '',
              quantity: 10,
              userId: users.clients.mathilda,
              status: SlotStatus.CANCELED
            },
            {
              transaction: '4e44f54d6',
              quantity: 2,
              userId: users.clients.celia,
              status: SlotStatus.COMPLETED
            },
            {
              transaction: '4e44f54d6',
              quantity: 8,
              userId: users.clients.orkia,
              status: SlotStatus.COMPLETED
            },
            {
              transaction: '',
              quantity: 7,
              userId: users.clients.david,
              status: SlotStatus.CANCELED
            },
            {
              transaction: '',
              quantity: 1,
              userId: users.clients.charlotte,
              status: SlotStatus.PENDING
            },
          ],
        },
      },
    },
    {
      where: { slug: 'flashback-3' },
      update: {},
      create: {
        name: 'Flashback #3',
        slug: 'flashback-3',
        location: 'Paris',
        organizer: 'La Phoenix Team / Family',
        date: new Date('2022-02-9'),
        description: 'La Phoenix Team / Family vous propose son nouveau concept de soirées qui vous ramèneront dans le passé.',
        price: 5.99,
        seats: 250,
        userId: users.esgi.julien,
        companyId: companies.esgi,
        status: EventStatus.PUBLISHED,
        slots: {
          create: [
            {
              transaction: '4e44f54d6',
              quantity: 10,
              userId: users.clients.anais,
              status: SlotStatus.COMPLETED
            },
            {
              transaction: '4e44f54d6',
              quantity: 2,
              userId: users.clients.salomé,
              status: SlotStatus.COMPLETED
            },
            {
              transaction: '',
              quantity: 8,
              userId: users.clients.thierry,
              status: SlotStatus.PENDING
            },
            {
              transaction: '',
              quantity: 7,
              userId: users.clients.david,
              status: SlotStatus.CANCELED
            },
            {
              transaction: '4e44f54d6',
              quantity: 1,
              userId: users.clients.louane,
              status: SlotStatus.COMPLETED
            },
          ],
        },
      },
    },
  ]
}

async function main() {
  const datas = await importData();

  datas.forEach(async events => await prisma.event.upsert(events));
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })