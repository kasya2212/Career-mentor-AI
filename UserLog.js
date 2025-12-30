import mongoose from "mongoose";

const userLogSchema = new mongoose.Schema(
  {
    skills: {
      type: String,
      required: true
    },
    interests: {
      type: String,
      required: true
    },
    experience: {
      type: String
    },
    response: {
      type: String
    }
  },
  { timestamps: true }
);

export default mongoose.model("UserLog", userLogSchema);
