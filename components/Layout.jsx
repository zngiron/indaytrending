import Meta from './Meta';
import Header from './Header';
import Footer from './Footer';
import Scripts from './Scripts';

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
      <main className="grow mt-16">
        {children}
      </main>
      <Footer />
      <Scripts />
    </>
  );
}

export default Layout;
