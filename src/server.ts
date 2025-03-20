import fastify from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'
import { checkIn } from './routes/check-in'
import { createEvent } from './routes/create-event'
import { getAllEvents } from './routes/get-all-events'
import { getAttendeeBadge } from './routes/get-attendee-badge'
import { getEvent } from './routes/get-event'
import { getEventAttendees } from './routes/get-event-attendees'
import { registerForEvent } from './routes/register-for-event'

const app = fastify()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(createEvent)
app.register(registerForEvent)
app.register(getEvent)
app.register(getAttendeeBadge)
app.register(checkIn)
app.register(getEventAttendees)
app.register(getAllEvents)

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server running!')
})
