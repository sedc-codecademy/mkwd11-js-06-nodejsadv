import {Router} from "express";
import AlbumController from "../controllers/albums.controller.js";

const router = Router();

// Add new artist
router.post("/", AlbumController.addAlbum)

export default router;
