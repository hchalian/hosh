import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-grow flex-col items-center justify-center">
      <h1 className="w-1/2">
        Oops, something went wrong. Could not find the page.
      </h1>
      <div className="bor pt-20">
        <Link href="/" className="hover:text-gold text-2xl">
          Take me back to the home page
        </Link>
      </div>
    </div>
  );
}
