import { Router } from "express";
import * as observationCtrl from '../controllers/observations.controller';

const router = Router()

router.post('/', observationCtrl.postObservations);
router.get('/', observationCtrl.getObservations);
router.put('/update/:id', observationCtrl.updateObservations);

export default router;