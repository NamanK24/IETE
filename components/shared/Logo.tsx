import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Logo = () => {
  return (
    <div className="flex items-center gap-x-2">
      <Image
        className="dark:hidden"
        src={"/assets/IETE-Logo.jpg"}
        height={100}
        width={100}
        alt="logo"
      />
    </div>
  );
};

export default Logo;
