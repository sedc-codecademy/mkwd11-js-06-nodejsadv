import {Router} from "express";
import ArtistController from "../controllers/artists.controller.js";


const router = Router();

// Search for artists
router.get("/", ArtistController.searchArtists)

// Add new artist
router.post("/", ArtistController.addArtist)

export default router;
