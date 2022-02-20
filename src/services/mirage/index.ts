import { createServer, Factory, Model } from 'miragejs'
import faker from '@faker-js/faker'

type User = {
  name: string
  email: string
  created_at: string
}

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
      //   <Partial<User>> means that some columns of User can be ommitted when creating a user
    },

    factories: {
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`
        },
        email() {
          return faker.internet.email().toLocaleLowerCase()
        },
        createdAt() {
          return faker.date.recent(10)
        },
      }),
      //   factory to create users
    },

    seeds(server) {
      server.createList('user', 100)
    },

    routes() {
      this.namespace = 'api'
      this.timing = 750
      // 750ms setTimeout for an HTTP request

      this.get('/users')
      this.post('/users')
      this.namespace = ''
      //   reset to '', in order to not generate conflict with the /api by Next.js
      this.passthrough()
    },
  })

  return server
}
