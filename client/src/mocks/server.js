import { setupServer } from 'msw/node'
import { handlers } from 'mocks/handlers'

//Mock server with given request handlers
export const server = setupServer(...handlers);