import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
});
const wantedCriminal = mongoose.model("wantedCriminal", imageSchema);

export { wantedCriminal };
