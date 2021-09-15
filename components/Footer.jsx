import { memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="p-5 mt-20 bg-primary text-white">
      <div className="container flex flex-col items-center -mt-5 space-y-5">
        <Link href="/">
          <a className="flex items-center -mt-10" title="Inday Trending">
            <Image
              src="/static/indaytrending-icon.png"
              width={80}
              height={80}
              alt="Inday Trending"
              draggable={false}
            />
          </a>
        </Link>
        <div>
          <span className="text-xs">{`©${year} Likha Media`}</span>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
