import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex items-center w-full p-6 bg-background z-50 !bg-[#295aec]">
      <Link href="https://www.youtube.com/@ieteelan/about">
        <Image
          src="/assets/youtube_logo.png"
          alt="youtube"
          height={30}
          width={30}
          className="mx-2"
        />
      </Link>
      <Link href="https://www.facebook.com/people/HQ-New-Delhi/pfbid02fMrmvJM4B9jZrkd8daTTwSSnNaHLCoXv6Y3iSc5uQLsZWA4HLFQBMjQEsCgpQdK2l/">
        <Image
          src="/assets/facebook_logo.png"
          alt="facebook"
          height={30}
          width={30}
          className="mx-2"
        />
      </Link>
      <Link href="https://twitter.com/ietehq1953">
        <Image
          src="/assets/twitter_logo.png"
          alt="twitter"
          height={30}
          width={30}
          className="mx-2"
        />
      </Link>
      <Link href="https://www.instagram.com/ietehq/">
        <Image
          src="/assets/instagram_logo.png"
          alt="instagram"
          height={30}
          width={30}
          className="mx-2"
        />
      </Link>
      <Link href="https://www.linkedin.com/in/iete-hq-8528aa299/">
        <Image
          src="/assets/linkedin_logo.png"
          alt="linkedin"
          height={30}
          width={30}
          className="mx-2"
        />
      </Link>
      <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
        <Button variant="ghost" size="sm" className="text-white">
          Privacy Policy
        </Button>
        <Button variant="ghost" size="sm" className="text-white">
          Terms & Conditions
        </Button>
      </div>
    </div>
  );
}
