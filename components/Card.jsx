import Link from 'next/link';
import Image from 'next/image';

function Card({
  slug,
  title,
  image,
  categories,
}) {
  return (
    <article className="group overflow-hidden relative rounded-lg bg-gradient-to-tr from-secondary via-primary to-primary aspect-[1280/670]">
      <Link href={`/stories/${slug}`}>
        <a className="absolute inset-0">
          <Image
            className="rounded-lg transition transform-gpu will-change-transform opacity-40 group-hover:scale-105"
            src={image?.node?.featured}
            alt={title}
            layout="fill"
            objectFit="cover"
            draggable={false}
            loading="eager"
          />
          <h1 className="absolute bottom-0 m-4 font-semibold text-white leading-5 line-clamp-3 transition group-hover:text-yellow-400">{title}</h1>
        </a>
      </Link>
      <div className="absolute m-4 flex flex-wrap gap-2 pointer-events-none">
        {categories?.edges.map(({ node }) => (
          <span className="px-4 py-1 rounded-full bg-white font-semibold text-primary text-xs" key={node?.id}>{node?.name}</span>
        ))}
      </div>
    </article>
  );
}

export default Card;
