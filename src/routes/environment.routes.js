import { Router } from "express";
import * as environmentCtrl from '../controllers/enviroment.controller';

const router = Router()

router.post('/', environmentCtrl.postEnvironment);
router.get('/get-all', environmentCtrl.getAll);
router.get('/get-all-info', environmentCtrl.getAllEnviromentsWithInfo);
router.put('/update/:id', environmentCtrl.updateEnviroment)
router.delete('/:id', environmentCtrl.deleteEnvironment)

export default router;