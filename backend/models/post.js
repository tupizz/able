import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    slug: { type: String, required: true, unique: true, index: true },
    category: {
      type: String,
      required: true,
      enum: ["web", "mobile", "network"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Post", postSchema);
