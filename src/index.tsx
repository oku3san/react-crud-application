import React from 'react';
import { unstable_createRoot as createRoot } from 'react-dom';
import { ReactQueryConfig, ReactQueryConfigProvider } from 'react-query';

import App from './App';

import './index.css';

const queryConfig: ReactQueryConfig = {
  shared: {
    suspense: true,
  },
  queries: {
    retry: 0,
    staleTime: 60 * 1000,
  },
};
const root = document.getElementById('root') as HTMLElement;

createRoot(root).render(
  <ReactQueryConfigProvider config={queryConfig}>
    <App />
  </ReactQueryConfigProvider>,
);
