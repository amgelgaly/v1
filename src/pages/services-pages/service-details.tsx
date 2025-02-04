import React from 'react';
import { useParams } from 'react-router-dom';
import EnhancedKanbanBoard from '@/components/kanban/EnhancedKanbanBoard'; // Assuming this path is correct

const ServiceDetailsPage: React.FC = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-right mb-8">Kanban Board for Service رقم {id}</h1>
      <EnhancedKanbanBoard />
    </div>
  );
};

export default ServiceDetailsPage;
