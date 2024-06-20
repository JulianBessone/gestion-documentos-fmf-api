import { Router } from "express";
import * as configCtrl from '../controllers/config.controller'

const router = Router()


router.post('/', configCtrl.createConfig)
router.get('/', configCtrl.getConfigs)
router.put('/', configCtrl.updateConfigById)

export default router;