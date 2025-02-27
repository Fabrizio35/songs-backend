import { PostSong, Song } from '../types'
import songsData from './songs.json'

const songs: Song[] = songsData

const getAllSongs = (): Song[] => songs

const findSongById = (id: number): Song | undefined => {
  const song = songs.find((s) => s.id === id)

  return song
}

const addSong = (song: PostSong): Song => {
  const currentDate = new Date()

  const formattedDate = currentDate.toISOString().split('T')[0]

  const newSong: Song = {
    id: songs.length + 1,
    ...song,
    plays: 0,
    likes: 0,
    release_date: formattedDate,
  }

  songs.push(newSong)

  return newSong
}

const addPlay = (songId: number): Song | undefined => {
  const song = findSongById(songId)

  if (song) {
    const modifiedSong = {
      ...song,
      plays: song.plays + 1,
    }

    return modifiedSong
  }

  return undefined
}

export { getAllSongs, addSong, findSongById, addPlay }
