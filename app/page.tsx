import Image from 'next/image';

export default function Home() {
  return <Hero />;
}

const Hero = () => {
  return (
    <div className="bg-[url('/hero-bg.jpg')] bg-cover">
      <div className="bg-primary flex w-full flex-col bg-opacity-80 pt-10 md:flex-row">
        <div data-contentname="hero-text" className="p-10 md:w-1/2">
          <h1 className="md:text-4xl lg:text-7xl">
            <span className="block whitespace-nowrap md:inline lg:block xl:inline">
              Los Angeles Attorney{' '}
            </span>
            <span className="block whitespace-nowrap md:inline lg:block xl:inline">
              Peter Hosharian
            </span>
          </h1>
          <h3 className="text-gold tracking-relaxed mb-4 mt-10 text-2xl font-medium">
            If you hire a billboard attorney, you will only see that attorney on
            a billboard. <br className="mt-9 block" />
            If you hire Peter Hosharian, you will have your attorney by your
            side.
          </h3>
          <p className="mb-10 text-xl font-light leading-relaxed tracking-wide md:text-base lg:text-2xl">
            Welcome to our boutique personal injury law firm, established in
            1995. We specialize exclusively in representing individuals injured
            due to auto, motorcycle, bicycle, and pedestrian accidents, as well
            as those affected by premises liability, dog bites, medical
            malpractice, and product liability. Our firm is dedicated to
            providing specialized service and personalized care for each case,
            ensuring we achieve the best possible results for our clients. With
            nearly three decades of experience, we have developed a reputation
            for excellence and commitment. Contact us today for a free
            consultation. We proudly serve our community in both Spanish and
            Armenian.
          </p>
          <button className="bg-gold border-gold text-primary hover:text-gold w-full rounded border py-8 text-2xl font-semibold hover:bg-transparent md:w-auto md:px-14">
            Find Out More
          </button>
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
