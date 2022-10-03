import '@/styles/global.scss';

import { ApiProvider } from '@reduxjs/toolkit/query/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import PageWrapper from '@/components/PageWrapper';
import { api } from '@/services/api';
import DifferencesView from '@/views/DifferencesView';
import ExampleQueryView from '@/views/ExampleQueryView';
import FetchExampleView from '@/views/FetchExampleView';
import IntroView from '@/views/IntroView';
import MainView from '@/views/MainView';
import OutroView from '@/views/OutroView';
import RealExampleView from '@/views/RealExampleView';
import RTKQueryExampleFilterView from '@/views/RTKQueryExampleFilterView';
import RTKQueryExampleGETView from '@/views/RTKQueryExampleGETView';
import RTKQueryExamplePOSTView from '@/views/RTKQueryExamplePOSTView';
import RTKQueryExampleSortView from '@/views/RTKQueryExampleSortView';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainView />,
  },
  {
    path: '/intro',
    element: <IntroView />,
  },
  {
    path: '/differences',
    element: <DifferencesView />,
  },
  {
    path: '/example-query',
    element: <ExampleQueryView />,
  },
  {
    path: '/fetch',
    element: <FetchExampleView />,
  },
  {
    path: '/rtk-query-get',
    element: <RTKQueryExampleGETView />,
  },
  {
    path: '/rtk-query-post',
    element: <RTKQueryExamplePOSTView />,
  },
  {
    path: '/rtk-query-filter',
    element: <RTKQueryExampleFilterView />,
  },
  {
    path: '/rtk-query-sort',
    element: <RTKQueryExampleSortView />,
  },
  {
    path: '/real-example',
    element: <RealExampleView />,
  },
  {
    path: '/outro',
    element: <OutroView />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApiProvider api={api}>
      <PageWrapper>
        <RouterProvider router={router} />
      </PageWrapper>
    </ApiProvider>
  </React.StrictMode>
);
