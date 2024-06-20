import { Router } from "express";
import * as unitCtrl from '../controllers/unit.controller';

const router = Router()

router.get('/', unitCtrl.getUnits);
router.post('/', unitCtrl.postUnit)

export default router;