import NoticeBoard from "@/components/shared/NoticeBoard";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <br />
      <div className=" flex items-center flex-col">
        <h2 className="text-2xl font-bold mb-10">Notice Board</h2>
        <NoticeBoard />
      </div>
      <div className="md:flex md:flex-row-reverse md:m-5 md:mt-0 block">
        <Image
          src="/assets/map.png"
          alt="Map"
          height={100}
          width={600}
          className="md:p-20 p-5"
        />
        <div className="text-black p-5 md:p-20 md:text-lg text-justify">
          The Institution of Electronics and Telecommunication Engineers (IETE)
          is India's leading recognised professional society devoted to the
          advancement of Science and Technology of Electronics,
          Telecommunication & IT. Founded in 1953. The IETE is the National Apex
          Professional body of Electronics and Telecommunication, Computer
          Science and IT Professionals.
          <br />
          <br />
          It serves more than 1,25,000 members (including Corporate, Student and
          ISF members) through various 63 Centres, spread all over India and
          abroad. The Institution provides leadership in Scientific and
          Technical areas of direct importance to the national development and
          economy. Government of India has recognised IETE as a Scientific and
          Industrial Research Organization (SIRO) and also notified as an
          educational Institution of national eminence.
          <br />
          <br />
          The objectives of IETE focus on advancing electro-technology. The IETE
          conducts and sponsors technical meetings, conferences, symposia, and
          exhibitions all over India, publishes technical journals and provides
          continuing education as well as career advancement opportunities to
          its members. The IETE focuses on advancement of the Science and
          Technology of Electronics, Telecommunication, Computers, Information
          Technology and related areas. Towards this end the Institution
          promotes and conducts basic engineering and continuing technical
          education programmes for human resource development.
        </div>
      </div>
    </div>
  );
}
