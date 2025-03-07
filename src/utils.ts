import { PostSong } from './types'

const checkSongData = (songData: PostSong) => {
  const { album, artist, name } = songData

  return (
    !album ||
    !artist ||
    !name ||
    typeof name !== 'string' ||
    typeof artist !== 'string' ||
    typeof album !== 'string'
  )
}

export { checkSongData }
