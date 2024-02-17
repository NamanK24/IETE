import mongoose, { Types } from "mongoose";

const blogSchema = new mongoose.Schema({
  imageUrls: [{
    type: String,
  }],
  heading: {
    type: String,
  },
  content: {
    type: String,
  },
  subHeading: {
    type: String,
  },
  adminId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "admins",
    required: true
  },
  eventDate: {
    type: Date,
  }
});

const Blog = mongoose.models?.blogs || mongoose.model("blogs", blogSchema);

export default Blog;
