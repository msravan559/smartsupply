import React from 'react';

import store from 'store';
import { Helmet } from 'react-helmet-async';

import { appConfig } from '../constants';

const WithTitle =
  ({ ChildComponent, pageTitle, breadCrumb, pageSlug }) =>
  (props) => {
    const aboutInfo =
      sessionStorage.aboutInfo && JSON.parse(sessionStorage.aboutInfo);

    store.set('pageName', breadCrumb);
    store.set('pageSlug', pageSlug);

    const title = aboutInfo
      ? `${aboutInfo.ProductLongName} | ${pageTitle}`
      : `${appConfig.siteName} | ${pageTitle}`;

    return (
      <>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <ChildComponent {...props} />
      </>
    );
  };

export default WithTitle;
