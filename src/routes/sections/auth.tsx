import {  Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import CompactLayout from 'src/layouts/compact';

import { SplashScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------


// ----------------------------------------------------------------------

const authAmplify = {
  path: 'amplify',
  element: (
    <Suspense fallback={<SplashScreen />}>
      <Outlet />
    </Suspense>
  ),
  children: [
    {
      element: (
        <CompactLayout>
          <Outlet />
        </CompactLayout>
      ),
    },
  ],
};

const authJwt = {
  path: 'jwt',
  element: (
    <Suspense fallback={<SplashScreen />}>
      <Outlet />
    </Suspense>
  ),

};

export const authRoutes = [
  {
    path: 'auth',
    children: [authAmplify, authJwt],
  },
];
