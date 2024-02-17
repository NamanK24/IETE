import { UserButton } from "@clerk/nextjs";
import { initialProfile } from "@/lib/initial-provider";
import NoticeBoard from "@/components/shared/NoticeBoard";
import { Button } from "@/components/ui/button";

export default async function AdminDashboard() {
  const profile = await initialProfile();
  return (
    <>
    <div className="flex flex-row justify-between m-5">
      <UserButton />
      <Button>Create</Button>
    </div>
    <NoticeBoard classes="m-5"/>
    </>
  );
}
