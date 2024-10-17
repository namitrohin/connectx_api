import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
const options: object = {
  definition: {
    openapi: '3.1.0',
    info: {
      title: 'Connect X And Remot X',
      description: 'Help to Security',
      summary: '',
      // version,
      contact: {
        name: 'API Support',
        url: 'api.connectx.co.in',
        email: 'support@rohininfotech.com',
      },
    },
    components: {
      securitySchemes: {
        ApiKeyAuth: {
          type: 'apiKey',
          name: 'token',
          in: 'header',
          description: 'JWT token to access API endpoints',
        },
      },
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 9000}`,
        description: 'Development Url',
      },
      {
        url: `https://api.connectx.co.in`,
        description: 'production Url',
      },
    ],
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./routes/*.js', './src/routes/**/*.js', './src/routes/**/*.ts'],
};
const swaggerSpec = swaggerJSDoc(options);
export = {
  serve: swaggerUi.serve,
  setup: swaggerUi.setup(swaggerSpec),
  doc: swaggerSpec,
};
