import { memo } from 'react';

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className="p-5 bg-primary text-white">
      <div className="container">
        <div className="text-xs text-center">
          <span>{`©${year} `}</span>
          <a href="https://likha.media" target="_blank" rel="noopener noreferrer">Likha Media</a>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
