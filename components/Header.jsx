import { useState, useEffect, memo } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

function Header({ categories }) {
  const router = useRouter();
  const [menu, setMenu] = useState(false);

  const handleMenu = () => setMenu(false);

  useEffect(() => {
    window.addEventListener('resize', handleMenu);
    return () => window.removeEventListener('resize', handleMenu);
  }, []);

  useEffect(() => {
    router.events.on('routeChangeStart', handleMenu);
    return () => router.events.off('routeChangeStart', handleMenu);
  }, [router]);

  useEffect(() => {
    const element = document.getElementById('__next');
    if (menu) element.classList.add('fixed');
    return () => element.classList.remove('fixed');
  }, [menu]);

  return (
    <header className="fixed z-20 top-0 w-full bg-white text-primary">
      <div className="container flex justify-center items-center h-16 xl:justify-start">
        <Link href="/">
          <a className="flex items-center space-x-2 whitespace-nowrap">
            <Image
              className="absolute inset-0 w-10 h-10"
              src="/static/indaytrending-icon.png"
              width={40}
              height={40}
              alt="Inday Trending"
              draggable={false}
              layout="fixed"
              priority
            />
            <span className="font-semibold text-sm">Inday Trending</span>
          </a>
        </Link>
        <button
          className="absolute z-20 left-0 flex justify-center items-center w-16 h-16 xl:hidden"
          type="button"
          onClick={() => setMenu(!menu)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 transition duration-500 transform-gpu ${menu ? 'text-white rotate-180' : 'rotate-0'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={menu ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h7'}
            />
          </svg>
          <span className="sr-only">Menu</span>
        </button>
        <nav className={`fixed z-10 inset-y-0 right-full w-80 pt-16 bg-primary text-white transition duration-500 transform-gpu will-change-transform xl:static xl:w-auto xl:pt-0 xl:ml-auto xl:bg-transparent xl:text-primary xl:transition-none ${menu ? 'translate-x-full' : 'translate-x-0'}`}>
          <ul className="flex flex-col xl:flex-row">
            {categories?.edges?.map(({ node }) => (
              <li key={node.id}>
                <Link href={`/${node.slug}`}>
                  <a className="flex items-center px-5 py-2 font-semibold text-lg xl:px-3 xl:text-sm hover:bg-white hover:text-primary hover:xl:bg-transparent hover:xl:text-secondary">
                    {node.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div
          className={`fixed inset-0 bg-black cursor-pointer transition duration-300 xl:hidden ${menu ? 'opacity-70 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setMenu(false)}
          aria-hidden
        />
      </div>
    </header>
  );
}

export default memo(Header);
