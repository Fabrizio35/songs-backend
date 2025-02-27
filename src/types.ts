export interface Song {
  id: number
  name: string
  artist: string
  release_date: string
  plays: number
  likes: number
  album: string
}

export type PostSong = Pick<Song, 'artist' | 'album' | 'name'>
