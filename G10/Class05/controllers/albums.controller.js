import AlbumService from "../services/albums.service.js";


export default class AlbumController {

  static async addAlbum(req, res) {
    try {
      const album = req.body;
      const newAlbum = await AlbumService.addAlbum(album);
      res.status(201).send(newAlbum);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}
