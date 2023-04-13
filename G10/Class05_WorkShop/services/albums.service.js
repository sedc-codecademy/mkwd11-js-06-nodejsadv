import Album from '../models/album.model.js';

export default class AlbumService {
  static async addAlbum(album) {
    const newAlbum = await Album.create(album);
    return newAlbum;
  }
}
