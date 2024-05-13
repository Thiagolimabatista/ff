import { Navigate, useRoutes } from 'react-router-dom';

import MainLayout from 'src/layouts/main';


// import { PATH_AFTER_LOGIN } from 'src/config-global';


import { HomePage, mainRoutes } from './main';


// ----------------------------------------------------------------------

export default function Router() {

  return useRoutes([
    {
      path: '/',
      element: (
        <MainLayout>
          <HomePage />
        </MainLayout>
      ),
    },
   
  

  
    // Main routes
    ...mainRoutes,

    // No match 404
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
