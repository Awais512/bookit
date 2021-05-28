import React from 'react';
import Login from '../components/auth/Login';
import Layout from '../components/layout/Layout';

const LoginPage = () => {
  return (
    <Layout title='Login Here'>
      <Login />
    </Layout>
  );
};

export default LoginPage;
