'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { title: 'home', url: '/' },
  { title: 'personal injury', url: '/personal-injury' },
  { title: 'testimonails', url: '/testimonails' },
  { title: 'contact us', url: '/contact-us' },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-white/15 pt-5">
      <Logo />
      <SocialLinks />
      <Address />
      <FooterLinks />
      <Disclaimer />
    </footer>
  );
}

const Logo = () => {
  return (
    <div className="flex items-center justify-center border-b border-white/15 pb-5">
      <div className="max-w-[30px] md:max-w-[40px]">
        <Link href="/">
          <Image
            src="/hosharianlaw-logo-icon-only.png"
            alt="Hosharian Law logo"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </Link>
      </div>
      <div className="ml-2 font-serif text-2xl md:text-4xl">
        <Link href="/">Hosharian Law</Link>
      </div>
    </div>
  );
};

const Address = () => {
  return (
    <div data-name="address" className="my-10 text-center">
      <h3 className="pb-3 font-serif text-3xl font-bold">Address</h3>
      <ul className="text-lg">
        <li>Hosharian Law Firm</li>
        <li>1407 West Magnolia Blvd</li>
        <li>Burbank CA, 91506</li>
        <li>Phone: 818 230-2755</li>
        <li>Fax: 888 677-7414</li>
      </ul>
    </div>
  );
};

const SocialLinks = () => {
  return (
    <div data-name="social" className="mt-10" aria-label="Social Media Links">
      <div className="flex justify-center gap-4">
        <div className="w-[30px]">
          <a
            href="https://www.facebook.com/pages/Law-Offices-of-Peter-A-Hosharian/102231943150664"
            target="_blank"
          >
            <Image
              src="/social-fb.png"
              alt="facebook logo"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </a>
        </div>
        <div className="w-[30px]">
          <a
            href="https://www.linkedin.com/pub/peter-hosharian/4/a7/8a5"
            target="_blank"
          >
            <Image
              src="/social-insta.png"
              alt="instagram logo"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </a>
        </div>
        <div className="w-[30px]">
          <a href="https://www.instagram.com/hosharianlaw/" target="_blank">
            <Image
              src="/social-linkin.png"
              alt="linkedin logo"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

const FooterLinks = () => {
  const pathname = usePathname();
  return (
    <div
      data-name="link-wrap"
      className="flex flex-col items-center overflow-hidden border-y border-white/15 px-5 py-10 md:h-auto md:flex-row md:justify-center md:gap-4 md:divide-y-0"
    >
      {links.map(({ title, url }) => (
        <Link
          href={url}
          key={title}
          className={`hover:text-gold ${pathname === url && 'text-gold'} cursor-pointer whitespace-nowrap py-2 text-xl font-light capitalize md:rounded md:first:border-0 md:first:pl-0`}
        >
          {title}
        </Link>
      ))}
    </div>
  );
};

const Disclaimer = () => {
  return (
    <div className="my-10 space-y-3 px-5">
      <p>Copyright &copy; {currentYear} Hosharian Law, All rights reserved.</p>
      <p>
        The Hosharian Law Firm is located in Glendale, CA and serves clients in
        and around Glendale, Burbank, Pasadena, Altadena, Tujunga, Silverlake,
        Echo Park, Pico Rivera, Los Angeles, Studio City, Sherman Oaks, Van
        Nuys, Encino, Reseda, Woodland Hills, Thousand Oaks, Agura Hills,
        Montebello, Whittier, Hollywood, Beverly Hills, and Ventura County.
      </p>
      <p>
        Disclaimer: The information provided throughout this Website is general
        in nature and may not apply to any particular set of facts or
        circumstances. It should not be construed as legal advice and does not
        constitute an engagement of the Hosharian Law Firm, aka Hoshraian Law,
        or establish an attorney-client relationship.
      </p>
    </div>
  );
};
