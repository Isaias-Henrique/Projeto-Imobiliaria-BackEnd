import { Router } from "express";
import UserController from "./controllers/UserController";
import SessionController from "./controllers/SessionController";
import auth from "./middlewares/auth";
import ImovelController from "./controllers/ImovelController";

import multer from "multer";
import uploadConfig from "./middlewares/upload";
import MenssageController from "./controllers/MenssageController";

const upload = multer(uploadConfig);

const router = Router();

router.post('/createusers', UserController.createUser);
router.get('/listusers', auth, UserController.findAllUser);
router.post('/session', SessionController.createSession);
router.post('/createimovel', upload.single("thumb"), ImovelController.createImovel);
router.get('/listimovel', ImovelController.findAllImovel);
router.get('/listimovel/:slug', ImovelController.findImovel);
router.post('/createmessage', MenssageController.createMessage);
router.get('/listmessage/:id', MenssageController.findMessage);
router.delete('/deleteImovel/:id', ImovelController.deleteImovel);
router.get('/listImovelUser/:id', ImovelController.listImovelUser);


export { router }