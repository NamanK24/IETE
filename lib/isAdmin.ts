import { connectToDB } from "@/lib/db";
import Admin from "@/model/admin";

export const isAdmin = async () => {
  await connectToDB();

  const data = await Admin.find({});

  return data.length > 0;
};
