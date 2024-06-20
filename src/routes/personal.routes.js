import { Router } from "express";
import * as personalCtrl from '../controllers/personal.controller';

const router = Router();

router.get('/', personalCtrl.getPersonal)
router.post('/', personalCtrl.postPersonal)
router.put('/update/:id', personalCtrl.updatePersonal)
router.get('/get/:id', personalCtrl.getPersonalById)
//router.delete()

export default router;