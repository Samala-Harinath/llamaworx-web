'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useMatomo } from '@datapunt/matomo-tracker-react';

const TrackPageView = () => {
  const pathname = usePathname();
  const { trackPageView } = useMatomo();

  useEffect(() => {
    trackPageView({
      href: window.location.href, 
      documentTitle: document.title, 
    });
  }, [pathname, trackPageView]);

  return null; 
};

export default TrackPageView;

