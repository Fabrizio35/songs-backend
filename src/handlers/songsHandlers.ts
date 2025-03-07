import { Response, Request } from 'express'
import {
  addSong,
  findSongById,
  getAllSongs,
  addPlay,
  addLike,
} from '../services/songServices'
import { checkSongData } from '../utils'

export const getAllSongsHandler = (_req: Request, res: Response) => {
  try {
    const songs = getAllSongs()

    res.status(200).send(songs)
  } catch (error: any) {
    res.status(400).send(error.message)
  }
}

export const getSongByIdHandler = (req: Request, res: Response) => {
  try {
    const songId = req.params.id

    const song = findSongById(Number(songId))

    if (song) res.status(200).send(song)
    else res.status(400).json({ error: 'Song not found' })
  } catch (error: any) {
    res.status(400).send(error.message)
  }
}

export const addSongHandler = (req: Request, res: Response) => {
  try {
    const { name, artist, album } = req.body

    if (checkSongData({ name, artist, album })) {
      res.status(400).json({ error: 'Incorrect or missing data' })
    } else {
      const newSong = addSong({ name, artist, album })

      res.status(200).send(newSong)
    }
  } catch (error: any) {
    res.status(400).send(error.message)
  }
}

export const addPlayHandler = (req: Request, res: Response) => {
  try {
    const { songId } = req.body

    if (!songId) res.status(400).json({ error: 'Missing song id' })

    const modifiedSong = addPlay(songId)

    if (!modifiedSong) res.status(404).json({ error: 'Song not found' })
    else res.status(200).send(modifiedSong)
  } catch (error: any) {
    res.status(400).send(error.message)
  }
}

export const addLikeHandler = (req: Request, res: Response) => {
  try {
    const { songId } = req.body

    if (!songId) res.status(400).json({ error: 'Missing song id' })

    const modifiedSong = addLike(songId)

    if (!modifiedSong) res.status(404).json({ error: 'Song not found' })
    else res.status(200).send(modifiedSong)
  } catch (error: any) {
    res.status(400).send(error.message)
  }
}
