import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import PageHeader from '../components/layout/PageHeader'; // assuming PageHeader is in a separate file

const ServiceDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-20">
        <PageHeader 
          title={'تفاصيل الخدمة'}
          subtitle={'معلومات تفصيلية عن الخدمة المختارة'}
        />
      </div>

      <div className="container mx-auto px-4 py-8">
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            تفاصيل الخدمة
          </Typography>
        </Container>
      </div>
    </div>
  );
};

export default ServiceDetails;
