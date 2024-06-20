import { Router } from "express";
import * as proyectCtrl from '../controllers/proyect.controller'

const router = Router();

router.get('/', proyectCtrl.getProyects)
router.post('/', proyectCtrl.postProyects)
router.put('/update/:id', proyectCtrl.updateProyect)
router.get('/get/:id', proyectCtrl.getProyectById)

export default router