# 🎵 Songs Backend

Test Backend application, without database, simulating a Spotify-like song application, with songs, artists, etc.

## Endpoints

### 👉 GET /songs

Get all Songs.

---

### 👉 GET /songs/:id

Get song by ID. Send ID by params:

**/songs/5**

---

### 👉 POST /songs

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

### 👉 PUT /songs/addPlay

Add a play to a song.

**Request Body:**

```json
{
  "songId": 7
}
```

---

### 👉 PUT /songs/addLike

Add a like to a song.

**Request Body:**

```json
{
  "songId": 7
}
```
