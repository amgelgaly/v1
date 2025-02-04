import React from 'react';
import AccountTopUpForm from '@/components/orders/AccountTopUpForm';
import ProtectedRoute from '@/components/auth/ProtectedRoute';

const Request = () => {
  return (
    <ProtectedRoute>
      <div>
        <h1>Account Top-up Information</h1>
        <p>This page will contain information and components for topping up your account.</p>
        <AccountTopUpForm />
      </div>
    </ProtectedRoute>
  );
};

export default Request;
