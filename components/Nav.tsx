'use client';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { title: 'home', url: '/' },
  { title: 'personal injury', url: '/personal-injury' },
  { title: 'testimonails', url: '/testimonails' },
  { title: 'contact us', url: '/contact-us' },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  return (
    <nav className="border-y border-white/10">
      <div className="flex items-center justify-between px-3 py-2 md:hidden">
        <div className="pl-4 font-serif text-2xl">Personal Injury Lawyers</div>
        <button className="block" onClick={() => setIsOpen(!isOpen)}>
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
        className={`flex flex-col divide-y divide-white/15 overflow-hidden md:flex md:h-auto md:flex-row md:gap-4 md:divide-y-0 ${
          isOpen ? '' : 'hidden'
        }`}
      >
        {links.map(({ title, url }) => (
          <Link
            href={url}
            key={title}
            onClick={() => setIsOpen(!isOpen)}
            className={`hover:text-gold ${pathname === url && 'text-gold'} cursor-pointer whitespace-nowrap px-4 py-6 text-xl font-light capitalize first:border-t first:border-white/15 md:rounded md:first:border-0 md:first:pl-0`}
          >
            {title}
          </Link>
        ))}
        <div className="hidden items-center justify-end whitespace-nowrap font-serif lg:flex lg:flex-grow lg:text-3xl xl:text-4xl">
          Personal Injury Lawyers
        </div>
      </div>
    </nav>
  );
}
