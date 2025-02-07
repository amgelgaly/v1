import React from 'react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/layout/PageHeader';
import { useParams } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const ServiceDetailsPage: React.FC = () => {
  const { id } = useParams();

  return (
    <div>
      <Button variant="outline" onClick={() => window.history.back()}>
        Back to Services
      </Button>
      <PageHeader title="Service Details" />
    </div>
  );
};

export default ServiceDetailsPage;
