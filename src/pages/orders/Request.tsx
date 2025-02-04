import React from 'react';
import GeneralServiceRequestForm from '../../components/orders/GeneralServiceRequestForm';
import { Container } from "@/components/ui/container"
import { Card } from "@/components/ui/card"

const RequestPage = () => {
  const languageDir = document.documentElement.dir;
  const isArabic = languageDir === 'rtl';

  return (
    <Container className="py-10">
      <Card className="p-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">{isArabic ? "صفحة الطلب" : "Request Page"}</h1>
          <p className="text-gray-700 mb-6">
            {isArabic
              ? "هذا هو محتوى صفحة /request. يرجى ملء النموذج أدناه لتقديم طلبك."
              : "This is the content for the /request route. Please fill out the form below to submit your request."
            }
          </p>
        </div>
        <GeneralServiceRequestForm />
      </Card>
    </Container>
  );
};

export default RequestPage;
