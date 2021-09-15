/* eslint-disable react/no-danger */

import Link from 'next/link';
import Image from 'next/image';

const Post = ({
  slug, title, image, categories,
}) => (
  <article className="group overflow-hidden relative rounded-xl bg-gradient-to-tr from-secondary via-primary to-primary aspect-custom content-visibility-auto">
    <Link href={`/stories/${slug}`}>
      <a className="overflow-hidden absolute inset-0">
        <Image
          className="transform-gpu scale-105 opacity-40 transition-transform duration-300 group-hover:scale-110"
          src={image?.node?.featured}
          alt={title}
          layout="fill"
          placeholder="blur"
          blurDataURL={image?.node?.thumbnail}
          objectFit="cover"
          draggable={false}
        />
        <h2
          className="absolute bottom-0 p-4 font-semibold text-white leading-5 lg:text-lg lg:leading-6 group-hover:text-yellow-400 overflow-ellipsis"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </a>
    </Link>
    <div className="absolute top-0 space-x-2 p-4 pointer-events-none">
      {categories?.edges.map(({ node }) => (
        <span className="px-4 py-1 rounded-full bg-white font-semibold text-primary text-xs" key={node?.id}>{node?.name}</span>
      ))}
    </div>
  </article>
);

export default Post;
