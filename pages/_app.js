import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/animate.css'
import '../styles/flaticon.css'
import "../styles/font-awesome.min.css";
import '../styles/style.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from 'next/head';
import { useState, useEffect } from 'react';
import SpeedometerLoader from '../components/SpeedometerLoader/SpeedometerLoader';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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
