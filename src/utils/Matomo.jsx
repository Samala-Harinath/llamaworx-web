"use client";
import {createInstance} from'@datapunt/matomo-tracker-react'
import { createContext, useContext } from 'react';

const matomoInstance = createInstance({
  urlBase: 'https://nexaltors.matomo.cloud/',
  siteId: 4,
  trackerUrl: 'https://nexaltors.matomo.cloud/index.php',
  srcUrl: 'https://cdn.matomo.cloud/nexaltors.matomo.cloud/matomo.js',
});

const MatomoContext = createContext(null);

export const MatomoProvider = ({ children }) => (
  <MatomoContext.Provider value={matomoInstance}>
    {children}
  </MatomoContext.Provider>
);

export const useMatomo = () => useContext(MatomoContext);
