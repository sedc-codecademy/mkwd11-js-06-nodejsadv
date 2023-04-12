import ArtistsService from "../services/artists.service.js";

export default class ArtistController {
  static async searchArtists(req, res) {
    try {
      const artistName = req.query.artistName;
      const artists = await ArtistsService.searchArtists(artistName);
      res.status(200).send(artists);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async addArtist(req, res) {
    try {
      const artist = req.body;
      const createdArtist = await ArtistsService.addArtist(artist);
      res.status(201).send(createdArtist);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}
