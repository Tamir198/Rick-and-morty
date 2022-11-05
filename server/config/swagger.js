import swaggerJSDoc from 'swagger-jsdoc';
import confige from '../confige.js';

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Rick and morty",
      version: "1.0.0",
      description: "A simple rick and morty website."
    },
    servers: [
      {
        url: "https://rickandmortybackend.vercel.app/",
        description: "Production"
      },
      {
        url: `http://localhost:${confige.port}/`,
        description: "Development"
      }
    ]
  },
  apis: [`./docs/*.js`],
};

export default swaggerJSDoc(options);