import {Router} from "express";
import AccessController from "../../controllers/access.controller.js";
import asyncHandler from "../../utils/errorHanlder.js"
const router = Router()

router.get("/test", (req, res, next) => {
    res.json("hello")
})
router.post("/register", asyncHandler(AccessController.signUp))
router.post("/login", asyncHandler(AccessController.signIn))


export default router