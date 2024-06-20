import { Router } from "express";
import * as accidentCtrl from '../controllers/accident.controller';

const router = Router()

router.post('/', accidentCtrl.postAccident)
router.get('/', accidentCtrl.getAccidents)

export default router;