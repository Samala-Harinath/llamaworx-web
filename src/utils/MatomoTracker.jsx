import { useEffect } from 'react';

const MatomoTracker = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window._mtm = window._mtm || [];
      window._mtm.push({
        'mtm.startTime': Date.now(),
        event: 'mtm.Start',
      });
    }
  }, []);

  return (
    <>
      {/* <Script src="https://cdn.matomo.cloud/nexaltors.matomo.cloud/container_5DxbPNCG.js" strategy="afterInteractive" async />
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-9QKJXRJSY0" /> */}
      {/* <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9QKJXRJSY0');
          `,
        }}
      /> */}
    </>
  );
};

export default MatomoTracker;
