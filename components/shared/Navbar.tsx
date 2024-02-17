"use client";

import useScrollTop from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { SignInButton, UserButton } from "@clerk/clerk-react";
// import { Button } from "@/components/ui/button";
// import { Spinner } from "@/components/shared/Spinner";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/shared/Logo";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  // const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrollTop();

  return (
    <div
      className={cn(
        "z-50 bg-[#295aec] top-0 flex items-center w-full p-3 px-6",
        scrolled && "border-b shadow-sm"
      )}
    >
      <div className="flex items-center gap-x-4">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div className="p-5 py-2 text-[#295aec] md:ml-auto md:justify-center justify-end w-full flex items-center gap-x-4">
        <div className="lg:flex lg:flex-col">
          <span className="text-sm text-center text-bold lg:text-3xl lg:text-white">
            The Institution of Electronics and Telecommunication Engineers
          </span>
          <span className="pt-2 text-xs lg:text-2xl text-center lg:text-white">
            (Navi Mumbai Center)
          </span>
        </div>
      </div>
      <div className="!bg-[#295aec] !text-white">
        <Sheet>
          <SheetTrigger>
            <Image
              src="/assets/hamburger.png"
              alt="Hamburger icon"
              height={50}
              width={50}
              className=""
            />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>IETE</SheetTitle>
              <SheetDescription>
                <div className="">
                  <Link href="/committee-members">Committee</Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
