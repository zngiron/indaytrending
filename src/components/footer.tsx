import { cn } from '@/library/utilities';

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className={cn(
      'bg-secondary text-white',
      'dark:bg-slate-950/70 dark:text-slate-50',
    )}
    >
      <div className={cn(
        'container',
        'flex items-center justify-center h-16',
      )}
      >
        <div className="text-xs text-center">
          <span>{`©${year} `}</span>
          <a href="https://likha.media" target="_blank" rel="noopener noreferrer">Likha Media</a>
        </div>
      </div>
    </footer>
  );
}
