import Song from "../models/song.model.js";

export default class SongsService {
  static async searchSongsByTitle(songTitle) {
    const songs = await Song.find({title: songTitle})
    return songs;
  }

  static async getSongsByGenre(genre) {
    const songs = await Song.find({genre})
    return songs;
  }

  static async getSongsByArtist(artistId) {
    const songs = await Song.find({artist: artistId})
    return songs;
  }

  static async getSongsByAlbum(albumId) {
    const songs = await Song.find({album: albumId})
    return songs;
  }

  static async addSong(song) {
    const newSong = await Song.create(song)
    return newSong;
  }
}
