import { PostSong, Song } from '../types'
import songsData from './songs.json'

const songs: Song[] = songsData

export const getAllSongs = (): Song[] => songs

export const findSongById = (id: number): Song | undefined => {
  const song = songs.find((s) => s.id === id)

  return song
}

export const addSong = (song: PostSong): Song => {
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

export const addPlay = (songId: number): Song | undefined => {
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

export const addLike = (songId: number): Song | undefined => {
  const song = findSongById(songId)

  if (song) {
    const modifiedSong = {
      ...song,
      likes: song.likes + 1,
    }

    return modifiedSong
  }

  return undefined
}
