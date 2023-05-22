import Meta from './Meta';
import Header from './Header';
import Footer from './Footer';
import Scripts from './Scripts';
import Anymind from './Anymind';

function Layout({ categories, children }) {
  if (!categories) {
    return (
      children
    );
  }

  return (
    <>
      <Meta />
      <Header categories={categories} />
      <Anymind />
      <main className="grow">
        {children}
      </main>
      <Footer />
      <Scripts />
    </>
  );
}

export default Layout;
