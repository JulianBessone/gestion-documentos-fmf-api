import { Router } from "express";
import * as documentCtrl from '../controllers/document.controller'

const router = Router()

router.post('/', documentCtrl.postDocument);
router.get('/', documentCtrl.getDocument);
router.get('/get/:id', documentCtrl.getDocumentById)
router.put('/update/:id', documentCtrl.updateDocument)
router.delete('/:id', documentCtrl.deleteDocument)

export default router;

