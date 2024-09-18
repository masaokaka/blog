import type { PropsWithChildren } from 'react';
import Header from '../Header';

const Container = ({ children }: PropsWithChildren) => (
  <main className="mx-auto p-6 md:max-w-6xl md:py-4">{children}</main>
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
