import { notFound } from 'next/navigation';
import parse from 'html-react-parser';

import { formatHTML } from '@/library/format';
import { cn } from '@/library/utilities';
import { getPage } from '@/data/pages';

interface PageModuleProps {
  slug: string;
}

export async function PageModule({ slug }: PageModuleProps) {
  const page = await getPage(slug);

  if (!page) {
    return notFound();
  }

  const html = formatHTML(page.content);

  return (
    <article className="py-4 space-y-4">
      <h1 className="font-semibold text-2xl">{page.title}</h1>
      <div
        className={cn(
          'prose max-w-none',
          'dark:text-slate-300 h-full overflow-y-auto',
          '[&_h2]:dark:text-white dark:[&_h3]:text-white',
        )}
      >
        {parse(html)}
      </div>
    </article>
  );
}
