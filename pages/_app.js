import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/animate.css'
import '../styles/flaticon.css'
import "../styles/font-awesome.min.css";
import '../styles/style.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from 'next/head';
import Script from 'next/script';
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
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-505CLEN8T6"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-505CLEN8T6');
        `}
      </Script>
      {loading ? <SpeedometerLoader /> : <Component {...pageProps} />}
    </div>
  )
}

export default MyApp
