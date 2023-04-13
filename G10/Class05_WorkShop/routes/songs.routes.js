import {Router} from "express";
import SongsController from "../controllers/songs.controller.js";

const router = Router();

// Search for songs
router.get("/", SongsController.searchSongsByTitle)

// See all songs by genre
router.get("/genre/:genre", SongsController.getSongsByGenre)

// See all songs by artist
router.get("/artist/:artistId", SongsController.getSongsByArtist)

// See all songs by artists' album
router.get("/album/:albumId", SongsController.getSongsByAlbum)

// Add new song
router.post("/", SongsController.addSong)

export default router;
