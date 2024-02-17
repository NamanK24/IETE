import { currentUser, redirectToSignUp } from "@clerk/nextjs";
import Admin from "@/model/admin";
import { connectToDB } from "@/lib/db";

export const initialProfile = async () => {
  await connectToDB();
  const user = await currentUser();

  if (!user) return redirectToSignUp();

  const profile = await Admin.findOne({ clerkId: user.id });

  if (profile) return profile;

  const newProfile = new Admin({
    clerkId: user.id,
    email: user.emailAddresses[0].emailAddress,
    isAdmin: true,
  });

  const savedProfile = await newProfile.save();

  return savedProfile;
};
