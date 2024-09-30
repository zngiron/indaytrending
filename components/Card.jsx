import Link from 'next/link';
import Image from 'next/image';

function Card({
  slug,
  title,
  image,
  categories,
}) {
  return (
    <article className="group overflow-hidden relative rounded-lg bg-gradient-to-tr from-primary via-primary to-secondary aspect-[1280/670]">
      <Link href={`/stories/${slug}`} className="absolute inset-0">
        <Image
          className="rounded-lg transition transform-gpu will-change-transform opacity-40 group-hover:scale-105"
          src={image?.node?.featured}
          width={1280}
          height={670}
          alt={title}
          draggable={false}
        />
        <h1 className="absolute bottom-0 m-4 font-semibold text-white leading-5 line-clamp-3 transition group-hover:text-yellow-400">{title}</h1>
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
