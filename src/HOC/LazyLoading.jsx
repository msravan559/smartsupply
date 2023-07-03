import { lazy } from 'react';

const LazyLoading = (factory) =>
  lazy(() =>
    Promise.all([
      factory(),
      new Promise((resolve) => setTimeout(resolve, 600)),
    ]).then(([moduleExports]) => moduleExports),
  );

export default LazyLoading;
