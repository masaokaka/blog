import type { PropsWithChildren } from 'react';
import Header from '../Header';

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
    </>
  );
};

export default Layout;
