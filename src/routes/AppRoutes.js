import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../features/auth/authSelectors';
import Auth from './Auth/Auth';
import Dashboard from './Dashboard/Dashboard';
import AccountsList from './Accounts/AccountsList';
import TransactionHistory from './Transactions/TransactionHistory';
import TransferMoney from './Transfers/TransferMoney';
import BillPayments from './Bills/BillPayments';
import UserSettings from './UserSettings/UserSettings';

const AppRoutes = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <Routes>
      <Route path="/login" element={!isAuthenticated ? <Auth /> : <Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
      <Route path="/accounts" element={isAuthenticated ? <AccountsList /> : <Navigate to="/login" />} />
      <Route path="/transactions" element={isAuthenticated ? <TransactionHistory /> : <Navigate to="/login" />} />
      <Route path="/transfer" element={isAuthenticated ? <TransferMoney /> : <Navigate to="/login" />} />
      <Route path="/bills" element={isAuthenticated ? <BillPayments /> : <Navigate to="/login" />} />
      <Route path="/settings" element={isAuthenticated ? <UserSettings /> : <Navigate to="/login" />} />
      <Route path="*" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />} />
    </Routes>
  );
};

export default AppRoutes;