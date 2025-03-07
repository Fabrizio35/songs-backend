import { Router } from 'express'
import {
  getAllSongsHandler,
  getSongByIdHandler,
  addSongHandler,
  addPlayHandler,
  addLikeHandler,
} from '../handlers/songsHandlers'

const songsRouter = Router()

/* SONGS ENDPOINTS */

// Get All Songs
songsRouter.get('/', getAllSongsHandler)

// Get Song By ID
songsRouter.get('/:id', getSongByIdHandler)

// Post/Add Song
songsRouter.post('/', addSongHandler)

// Add Play Song
songsRouter.put('/addPlay', addPlayHandler)

// Add Like Song
songsRouter.put('/addLike', addLikeHandler)

export default songsRouter
