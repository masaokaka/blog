import type { PropsWithChildren } from 'react';
import Header from '../Header';

const Container = ({ children }: PropsWithChildren) => (
  <div className="px-20 py-10">{children}</div>
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
