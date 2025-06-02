import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/animate.css'
import '../styles/flaticon.css'
import "../styles/font-awesome.min.css";
import '../styles/style.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from 'next/head';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import SpeedometerLoader to avoid SSR issues
const SpeedometerLoader = dynamic(
  () => import('../components/SpeedometerLoader/SpeedometerLoader'),
  { ssr: false }
);

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <div>
      <Head>
        <title>Shift Creative Design</title>
      </Head>
      {loading ? <SpeedometerLoader /> : <Component {...pageProps} />}
    </div>
  )
}

export default MyApp
