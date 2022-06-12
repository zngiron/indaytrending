import Link from 'next/link';

function Pagination({ posts, category }) {
  return (
    <div className="flex gap-2">
      {posts?.pageInfo?.hasPreviousPage && (
        <Link href={`/page?category=${category.slug}&before=${posts.pageInfo.startCursor}`} passHref>
          <button className="flex items-center px-4 py-2 rounded-lg bg-primary font-semibold text-white hover:bg-secondary transition" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Previous</span>
          </button>
        </Link>
      )}
      {posts?.pageInfo?.hasNextPage && (
        <Link href={`/page?category=${category.slug}&after=${posts.pageInfo.endCursor}`} passHref>
          <button className="flex items-center px-4 py-2 rounded-lg bg-primary font-semibold text-white hover:bg-secondary transition" type="button">
            <span>Next</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </Link>
      )}
    </div>
  );
}

export default Pagination;
