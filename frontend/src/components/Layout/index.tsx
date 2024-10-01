import Footer from '@/src/components/Footer';
import Header from '@/src/components/Header';
import type { PropsWithChildren } from 'react';

const Container = ({ children }: PropsWithChildren) => (
  <main className="mx-auto p-6 md:py-4 lg:max-w-5xl xl:max-w-6xl">
    {children}
  </main>
);

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
