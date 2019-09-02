const ROUTES = [
  {
    path: '/',
    exact: true,
  },
  {
    path: '/home',
    exact: true,
  },
  {
    path: '/dashboard/',
    strict: true,
  },
  {
    path: '/github/:githubId',
  },
];

export default ROUTES;
