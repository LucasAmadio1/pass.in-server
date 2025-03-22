import type { FastifyInstance } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { prisma } from '../lib/prisma'

export async function getAllEvents(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    '/events',
    {
      schema: {
        summary: 'Get all events',
        tags: ['events'],
        response: {
          200: z.object({
            events: z.array(
              z.object({
                id: z.string().uuid(),
                title: z.string(),
              })
            ),
          }),
        },
      },
    },
    async (_, reply) => {
      const events = await prisma.event.findMany({
        select: {
          id: true,
          title: true,
        },
      })

      return reply.status(200).send({ events })
    }
  )
}
