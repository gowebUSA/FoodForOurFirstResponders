import React from 'react';

const Home = React.lazy(() => import('./views/Home'));
const AboutUs = React.lazy(() => import('./views/AboutUs'));
const HowToHelp = React.lazy(() => import('./views/HowToHelp'));

const routes = [
  { path: '/Home', exact: true, name: 'Home', component: Home },
  { path: '/AboutUs', name: 'AboutUs', component: AboutUs },
  { path: '/HowToHelp', exact: true, name: 'HowToHelp', component: HowToHelp },
];

export default routes;
