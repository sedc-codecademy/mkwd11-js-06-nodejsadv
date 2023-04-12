import SongsService from "../services/songs.service.js";

export default class SongsController {
  static async searchSongsByTitle(req, res) {
    try {
      const songTitle = req.query.songTitle;
      const songs = await SongsService.searchSongsByTitle(songTitle);
      res.status(200).send(songs);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getSongsByGenre(req, res) {
    try {
      const genre = req.params.genre;
      const songs = await SongsService.getSongsByGenre(genre);
      res.status(200).send(songs);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getSongsByArtist(req, res) {
    try {
      const artistId = req.params.artistId;
      const songs = await SongsService.getSongsByArtist(artistId);
      res.status(200).send(songs);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getSongsByAlbum(req, res) {
    try {
      const albumId = req.params.albumId;
      const songs = await SongsService.getSongsByAlbum(albumId);
      res.status(200).send(songs);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async addSong(req, res) {
    try {
      const song = req.body;
      const newSong = await SongsService.addSong(song);
      res.status(201).send(newSong);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}
