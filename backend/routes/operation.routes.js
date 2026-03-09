import express from "express"
import getAllThreads from "../controllers/getAllThreads.controller.js"
import getOneThread from "../controllers/getOneThread.controller.js"
import deleteAThread from "../controllers/deleteAThread.controller.js"
import addAMessageToThread from "../controllers/addAMessageToThread.controller.js"


const router=express.Router()
router.get("/threads",getAllThreads)
router.get("/threads/:threadId",getOneThread)
router.delete("/threads/:threadId",deleteAThread)
router.post("/chat",addAMessageToThread)

export default router

