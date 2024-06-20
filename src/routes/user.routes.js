import { Router } from "express";
import * as userCtrl from '../controllers/user.controller'
import { authJwt, verifySignup } from "../middlewares";

const router = Router()


router.post('/',[
    verifySignup.checkRolesExisted,
], userCtrl.createUser)
router.get('/', userCtrl.getUsers)

export default router;