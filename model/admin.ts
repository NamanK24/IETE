import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  clerkId: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  isAdmin: {
    type: Boolean,
    default: true,
  },
});

const Admin = mongoose.models?.admins || mongoose.model("admins", adminSchema);

export default Admin;
