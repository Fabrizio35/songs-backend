import { Router } from 'express'
import songsRouter from './songsRouter'

const router = Router()

router.use("/songs", songsRouter)

export default router
