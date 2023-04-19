import {Schema, model} from "mongoose";

const artistSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
  },
  age: {
    type: Number,
    required: true,
  },
  songs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Song",
    }
  ]
})

const Artist = model("Artist", artistSchema);

export default Artist;
