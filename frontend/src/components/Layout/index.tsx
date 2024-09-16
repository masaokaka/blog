import type { PropsWithChildren } from 'react';
import Header from '../Header';

const Container = ({ children }: PropsWithChildren) => (
  <div className="mx-auto p-6 md:max-w-4xl md:py-4">{children}</div>
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
