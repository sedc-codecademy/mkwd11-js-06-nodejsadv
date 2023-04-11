import Artist from "../models/artist.model.js";

export default class ArtistsService {
  static async searchArtists(artistName) {
    const artists = await Artist.find({name: artistName})
    return artists;
  }

  static async addArtist(artist) {
    const createdArtist = await Artist.create(artist);
    return createdArtist;
  }
}
