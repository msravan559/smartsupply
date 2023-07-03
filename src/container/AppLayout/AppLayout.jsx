import React from 'react';

import { Layout } from 'antd';

import { Content, Footer, Header } from '../../layouts';

import { useAppSelector } from '../../hooks';
import { selectUser } from '../../features/auth/authSlice';

const AppLayout = (props) => {
  const user = useAppSelector(selectUser);

  if (!user) {
    return <>{props.children}</>;
  }

  return (
    <Layout>
      <Header />
      <Content>{props.children}</Content>
      <Footer />
    </Layout>
  );
};

export default AppLayout;
