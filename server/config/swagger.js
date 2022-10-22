import swaggerJSDoc from 'swagger-jsdoc';

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
        url: "http://localhost:4000/",
        description: "Development"
      }
    ]
  },
  apis: ['./routes/*.js'],
};


export default swaggerJSDoc(options);