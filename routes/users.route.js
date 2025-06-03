import express from 'express';

import { renderHomepage } from '../controllers/home.controller.js';

const router = express.Router();

router.get('/', renderHomepage);


export default router;  