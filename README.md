# Songs Backend

Test Backend application, without database, simulating a Spotify-like song application, with songs, artists, etc.

## Endpoints

### GET /songs

Get all Songs.

---

### POST /songs

Create a new song.

**Request Body:**

```json
{
  "name": "My first song",
  "artist": "Fabrizio",
  "album": "FO35"
}
```

---

### PUT /songs/addPlay

Add a play to a song.

**Request Body:**

```json
{
  "songId": 11
}
```
