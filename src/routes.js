import { Router } from 'express';
import multer from 'multer';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import MiddlewareAuth from './app/middlewares/auth';
import multerConfig from './config/multer';
import fileController from './app/controllers/FileController';

const routes = new Router();
const upload = multer(multerConfig);
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(MiddlewareAuth);
routes.put('/users', UserController.update);

routes.post('/files', upload.single('file'), fileController.store);
export default routes;
