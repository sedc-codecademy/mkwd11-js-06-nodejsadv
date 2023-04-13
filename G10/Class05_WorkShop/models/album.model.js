import {Schema, model} from "mongoose";

const albumSchema = new Schema({
  title: {
    type: String,
    required: true,
    minLength: 2,
  },
  songs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Song",
    }
  ]
})

const Album = model("Album", albumSchema);

export default Album;
