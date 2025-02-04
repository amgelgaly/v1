import React from 'react';
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import ProtectedRoute from '@/components/auth/ProtectedRoute';

import AccountTopUpForm from '@/components/orders/AccountTopUpForm';

const RequestPage = () => {
  const languageDir = document.documentElement.dir;
  const isArabic = languageDir === 'rtl';

  return (
    <ProtectedRoute>
      <Container className="py-10">
        <Card className="p-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">{isArabic ? "خدمات الحساب" : "Account Services"}</h1>
            <p className="text-gray-700 mb-6">
              {isArabic
                ? "هذه الصفحة مخصصة لخدمات الحساب. يمكنك هنا إدارة خدمات حسابك."
                : "This page is dedicated to account services. Here, you can manage your account services."
              }
            </p>
          </div>
          <AccountTopUpForm />
        </Card>
      </Container>
    </ProtectedRoute>
  );
};

export default RequestPage;