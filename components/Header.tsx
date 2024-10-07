'use client';

import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { PhoneIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const links = [
  { title: 'home', url: '/' },
  { title: 'personal injury', url: '/personal-injury' },
  { title: 'testimonails', url: '/testimonails' },
  { title: 'contact us', url: '/contact-us' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="md:px-0">
      <nav className="relative border-b border-white/10">
        <div className="flex items-center justify-between px-3 py-2">
          <div>
            <Link href="/">
              <div data-name="logo-block" className="flex items-center md:py-2">
                <div className="max-w-[30px] md:max-w-[58px]">
                  <Image
                    src="/hosharianlaw-logo-icon-only.png"
                    alt="Hosharian Law logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
                <div className="ml-2 font-serif text-2xl md:text-5xl">
                  Hosharian Law
                </div>
              </div>
            </Link>
          </div>

          <button
            className="block lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <span>
                <XMarkIcon className="size-[40px]" />
              </span>
            ) : (
              <span>
                <Bars3Icon className="size-[40px]" />
              </span>
            )}
          </button>
        </div>
        <div
          data-name="link-wrap"
          className={`flex flex-col divide-y divide-white/15 overflow-hidden lg:absolute lg:right-0 lg:top-0 lg:flex lg:h-auto lg:flex-row lg:gap-4 lg:divide-y-0 lg:pt-2 ${
            isOpen ? '' : 'hidden'
          }`}
        >
          {links.map(({ title, url }) => (
            <Link
              href={url}
              key={title}
              onClick={() => setIsOpen(!isOpen)}
              className={`hover:text-gold ${pathname === url && 'text-gold'} cursor-pointer whitespace-nowrap px-4 py-6 text-xl font-light capitalize first:border-t first:border-white/15 lg:first:border-0 lg:first:pl-0`}
            >
              {title}
            </Link>
          ))}
          <div
            data-name="contact-block"
            className="flex items-center px-4 py-6 font-sans font-light md:hidden"
          >
            <div className="rounded-full border border-gold/50 p-2 md:border-2 md:border-gold md:bg-transparent md:p-4">
              <PhoneIcon className="size-[14px] text-gold md:size-[24px]" />
            </div>
            <div className="pl-2 text-lg md:pl-4 md:text-2xl lg:text-3xl">
              <a href="tel:818-230-2755">
                <span className="hidden md:inline-block">Call Us:</span> 818 230
                2755
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
