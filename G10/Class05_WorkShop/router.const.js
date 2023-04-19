import {Router} from "express";
import songsRoutes from "./routes/songs.routes.js";
import artistsRoutes from "./routes/artists.routes.js";
import albumsRoutes from "./routes/albums.routes.js";

const router = Router();

router.use("/songs", songsRoutes);
router.use("/artists", artistsRoutes);
router.use("/albums", albumsRoutes);

export default router;
