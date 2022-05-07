import { setupServer } from 'msw/node'
import { handlers } from './handlers'

//Mock server with given request handlers
export const server = setupServer(...handlers);