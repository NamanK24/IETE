import { SignUp } from "@clerk/nextjs";
import { isAdmin } from "@/lib/isAdmin";
import { redirect } from "next/navigation";

export default async function Page() {
  const admin = await isAdmin();
  if (admin) return redirect("/sign-in");
  return <SignUp />;
}
