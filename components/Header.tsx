import Image from 'next/image';
import { PhoneIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between px-3 py-4 md:px-0">
      <Link href="/">
        <div data-name="logo-block" className="flex items-center">
          <div className="max-w-[30px] md:max-w-[58px] lg:max-w-[78px]">
            <Image
              src="/hosharianlaw-logo-icon-only.png"
              alt="Hosharian Law logo"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className="ml-2 font-serif text-2xl md:text-5xl lg:text-6xl">
            Hosharian Law
          </div>
        </div>
      </Link>

      <div
        data-name="contact-block"
        className="flex items-center font-sans font-light"
      >
        <div className="border-gold/50 md:border-gold rounded-full border p-2 md:border-2 md:bg-transparent md:p-4">
          <PhoneIcon className="text-gold size-[14px] md:size-[24px]" />
        </div>
        <div className="pl-2 text-lg md:pl-4 md:text-2xl lg:text-3xl">
          <a href="tel:818-230-2755">
            <span className="hidden md:inline-block">Call Us:</span> 818 230
            2755
          </a>
        </div>
      </div>
    </header>
  );
}
