import { Router } from 'express'
import {
  getAllSongsHandler,
  getSongByIdHandler,
  addSongHandler,
  addPlayHandler
} from '../handlers/songsHandlers'

const songsRouter = Router()

// Get All Songs
songsRouter.get('/', getAllSongsHandler)

// Get Song By ID
songsRouter.get('/:id', getSongByIdHandler)

// Post/Add Song
songsRouter.post('/', addSongHandler)

// Add Play Song
songsRouter.put("/addPlay", addPlayHandler)

export default songsRouter
