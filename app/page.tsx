import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Hero />
      <PersonalInjury />
    </>
  );
}

const Hero = () => {
  return (
    <div className="bg-[url('/hero-bg.jpg')] bg-cover">
      <div className="bg-diffuse-blue flex w-full flex-col md:flex-row">
        <div data-contentname="hero-text" className="p-5 md:w-1/2">
          <section>
            <div className="space-y-2 py-5 text-center font-serif font-bold">
              <p className="text-5xl">Top-Rated Personal Injury Firm</p>
              <div className="pt-8">
                <p className="text-3xl lg:text-4xl">
                  We Specialize In: Medical Malpractice, Auto Accidents, Slip
                  and Falls.
                </p>
              </div>
              {/* <div className="pt-8">
                <p className="text-4xl">Medical Malpractice</p>
                <p className="text-4xl">Auto Accidents</p>
                <p className="text-4xl">Slip and Fall</p>
              </div> */}
            </div>
            <div className="pt-5 text-center font-serif text-2xl font-bold uppercase">
              <p>Free Case Evaluation</p>
              <p>Only Pay When We Win!</p>
              <p className="text-gold2 mt-6 font-sans text-3xl lg:text-5xl">
                Call Us: 818 230 2755
              </p>
            </div>
            <h1 className="mt-10 whitespace-nowrap border-t border-white/50 pt-3">
              #1 Best Attorey <br /> Peter Hosharian
            </h1>
            <p className="mb-5 mt-5 text-2xl">
              Winner of Burbank&apos;s Best attorney and law firm of the year.
            </p>
            <div className="flex justify-between px-5">
              <AwardImage
                imgSrc="/burbanks-best-2023.png"
                alt="Burbank's best 2022"
              />
              <AwardImage
                imgSrc="/burbanks-best-2023.png"
                alt="Burbank's best 2023"
              />
              <AwardImage
                imgSrc="/burbanks-best-2023.png"
                alt="Burbank's best 2024"
              />
            </div>
          </section>
        </div>
        <div className="flex flex-col items-end justify-end md:w-1/2">
          <Image
            src="/peter-at-office.png"
            width="603"
            height="700"
            alt="Peter Hosharian"
          />
        </div>
      </div>
    </div>
  );
};

const PersonalInjury = () => {
  return (
    <section>
      {/* <h2>Personal Injury</h2>
      <p>
        For over 30 years, our personal injury law firm has successfully
        recovered hundreds of millions of dollars for thousands of clients
        injured in automobile, pedestrian, motorcycle, and bicycle accidents, as
        well as slip and fall incidents, emotional distress cases, and other
        negligence-related situations. Our dedicated team is thoroughly equipped
        to handle every aspect of Personal Injury Claims, guiding you from the
        initial insurance claim to a jury trial in the Superior Court.
      </p>
      <h3>Pracatice areas</h3>
      <p>Auto, Pedestrian, Motorcycle and Bicycle Accidents</p>
      <p>Slip and Fall</p>
      <p>MEDICAL MALPRACTICE</p> */}
    </section>
  );
};

const AwardImage = ({ imgSrc, alt }: { imgSrc: string; alt: string }) => {
  return (
    <div className="w-[100px]">
      <Image
        src={imgSrc}
        alt={alt}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
};
