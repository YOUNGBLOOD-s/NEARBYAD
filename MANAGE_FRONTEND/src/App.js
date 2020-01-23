import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ManagePage from './pages/ManagePage';
import AdminPage from './pages/AdminPage';

const App = () => {
  return (
    <>
      <Route component={MainPage} path="/" exact />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={ManagePage} path="/manage" />
      <Route component={AdminPage} path="/admin" />
    </>
  );
};

export default App;
