import { useRouter } from 'next/router';
import RootLayout from '@/components/RootLayout';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // List of routes where the RootLayout will not be applied
  const excludedRoutes = ['/']; // Add routes that don't need the RootLayout

  // Check if the current route is in the excluded routes list
  const excludeLayout = excludedRoutes.includes(router.pathname);

  if (excludeLayout) {
    return <Component {...pageProps} />;
  }

  return <RootLayout><Component {...pageProps} /></RootLayout>;
}

export default MyApp;
