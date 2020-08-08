import { Router } from 'express';
import cors from 'cors';

import BrandController from './app/controllers/BrandController';
import ProductController from './app/controllers/ProductController';

const routes = Router();

routes.use(cors());
routes.get('/', (req, res) => res.json({ result: 'Iniciou Banco' }));

// ROUTES PARA BRANDS
routes.post('/brands', BrandController.store);
routes.get('/brands/:uid', BrandController.show);
routes.get('/brands', BrandController.index);
routes.put('/brands/:uid', BrandController.update);
routes.delete('/brands/:uid', BrandController.delete);

// ROUTES PRODUCTS
routes.post('/products', ProductController.store);
routes.get('/products/:uid', ProductController.show);
routes.get('product', ProductController.index);
routes.put('/product/:uid', ProductController.update);
routes.delete('/product/:uid', ProductController.delete);

export default routes;
