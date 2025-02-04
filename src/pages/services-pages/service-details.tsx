import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const ServiceDetailsPage: React.FC = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardContent className="p-6">
          <h1 className="text-2xl font-bold text-right">تفاصيل الخدمة رقم {id}</h1>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceDetailsPage;
