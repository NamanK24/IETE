import Image from "next/image";

const CommitteePage = () => {
  return (
    <div className="m-5 flex flex-row gap-10">
      <Image
        src="/assets/principal.png"
        alt="chairman"
        width={400}
        height={300}
        className="m-20"
      />
      <div className="">
        <h2 className="p-20 pb-0 text-4xl font-semibold">
          Dr. Mukesh D. Patil,
        </h2>
        <h3 className="p-20 pt-5 text-xl pb-0 font-semibold">
          (M.Tech and Ph.D.- IIT Bombay)
          <span className="">
            <br />
            Principal, Ramrao Adik Institute of Technology
          </span>
        </h3>
        <div className="p-20 pt-5 text-justify">
          As the Principal of Ramrao Adik Institute of Technology (RAIT), it has
          been an exhilarating roller coaster ride for me. RAIT throbs with
          activities both of the curricular and co-curricular kind. Its
          corridors pulsate with life and happiness. Here, generations of
          youngsters have tasted academic success and also managed to develop
          their personalities in the lush atmosphere provided by the college.
          <br />
          <br />
          RAIT has nurtured its students through various forums such as
          technical festivals and events held under committees like IEEE, CSI,
          ISA, IETE, ISTE and ACM and associations like Motif (for developing
          entrepreneurial skills) and Kalaraag, a platform for developing the
          dramatic, literary, and other creative talents of the students. We
          also encourage participation in community service through Social Wing
          of RAIT. Rarely is this seen in any other engineering college.
          <br />
          <br />
          For us at RAIT, both faculty and students aim to achieve all-round
          development. The faculties regularly update and upgrade their skills
          with workshops, seminars and paper presentations. Faculty members are
          handpicked from prestigious institutions like IIT, IISc, NIT and
          institutes of repute to inspire the students to be innovative,
          leaders, thinkers who ideate and provide practical solutions to
          problems.
          <br />
          <br />
          There is constant interaction with the industry through the vibrant
          training and placement cell that provides us a realistic view of the
          demands of the industry. This has helped our students to be placed in
          large numbers. Additionally, to facilitate the smooth transition from
          institution to industry for our students, we provide laboratory
          infrastructure and equipment that replicates what is available in the
          industry so that, that are ready for the challenges that lay ahead.
          Our endeavour is to ensure that we carry on with the same momentum and
          energy as before and forever, reaching the pinnacle of success and
          fulfilment. Come on board RAIT. Let us celebrate success.
        </div>
      </div>
    </div>
  );
};

export default CommitteePage;
