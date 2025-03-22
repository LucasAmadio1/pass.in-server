import { prisma } from '../src/lib/prisma'

async function seed() {
  await prisma.event.create({
    data: {
      id: 'd1a7f64a-94b0-4bfd-a161-3af7d735602c',
      title: 'Unite Summit',
      slug: 'unite-summit',
      details: 'Evento para devs',
      maximumAttendees: 120,
    },
  })
}

seed().then(() => {
  console.log('Database seeded!')
  prisma.$disconnect()
})
