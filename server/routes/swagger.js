import { Router } from 'express';
const router = Router();

import swaggerUi from 'swagger-ui-express';
import swaggerConfige from '../config/swagger.js';

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerConfige));

export default router;