import Meta from './Meta';
import Header from './Header';
import Footer from './Footer';

function Layout({ categories, children }) {
  return (
    <>
      <Meta />
      <Header categories={categories} />
      <main className="grow mt-16">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
