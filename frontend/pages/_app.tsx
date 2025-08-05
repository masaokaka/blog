import ErrorFallback from '@/src/components/ErrorFallback';
import Layout from '@/src/components/Layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ErrorBoundary } from 'react-error-boundary';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ErrorBoundary>
  );
}
