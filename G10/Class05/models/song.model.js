import {Schema, model} from "mongoose";

const songsSchema = new Schema({
  title: {
    type: String,
    required: true,
    minLength: 2,
  },
  genre: {
    type: String,
    required: true,
  },
  artist: {
    type: Schema.Types.ObjectId,
    ref: "Artist",
    required: true,
  },
  album: {
    type: Schema.Types.ObjectId,
    ref: "Album",
    required: true,
  }
})

const Song = model("Song", songsSchema);

export default Song;
