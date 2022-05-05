import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Thumbnail({ title, slug, image }) {
  const [thumbnail, setThumbnail] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 720) return setThumbnail(true);
      return setThumbnail(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <article className={`group fixed z-10 inset-x-0 bg-primary text-white transition duration-500 xl:hidden ${thumbnail ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <Link href={`/stories/${slug}`}>
        <a className="flex justify-center items-center h-16 px-5 gap-5 group-hover:bg-secondary">
          <div className="relative flex items-center">
            <div className="absolute z-10 -top-1 -right-1 bg-red-700 w-2 h-2 rounded-full" aria-hidden>
              <div className="animate-ping bg-red-700 w-full h-full rounded-full" />
            </div>
            <Image
              className="rounded-md opacity-70"
              src={image}
              alt={title}
              layout="fixed"
              width={40}
              height={40}
              draggable={false}
            />
          </div>
          <span className="flex text-xs line-clamp-2">
            <span className="font-semibold text-yellow-400">Next Story:</span>
            <span>{` ${title}`}</span>
          </span>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </a>
      </Link>
    </article>
  );
}

export default Thumbnail;
