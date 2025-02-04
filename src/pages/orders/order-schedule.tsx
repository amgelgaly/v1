import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EnhancedKanbanBoard from '@/components/kanban/EnhancedKanbanBoard';
import { Task } from '@/components/kanban/TaskCard';
import { Card } from '@/components/ui/card';
import ServiceTracker from '@/components/orders/ServiceTracker';
import PageHeader from '@/components/layout/PageHeader';
import { Button } from "@/components/ui/button";

const initialOrders: Task[] = [
  {
    id: 1,
    title: 'طلب #1001 - محمد أحمد',
    description: 'العنوان: شارع الملك فهد، الرياض\nتفاصيل الطلب: توصيل وجبة غداء\nرقم الهاتف: 0501234567',
    status: 'pending',
    priority: 'medium',
    dueDate: new Date().toISOString(),
    labels: ['توصيل طعام', 'الرياض']
  },
  {
    id: 2,
    title: 'طلب #1002 - سارة محمد',
    description: 'العنوان: شارع التحلية، جدة\nتفاصيل الطلب: توصيل طرد\nرقم الهاتف: 0567891234',
    status: 'in-progress',
    priority: 'high',
    dueDate: new Date().toISOString(),
    labels: ['توصيل طرد', 'جدة']
  },
];

const OrderSchedulePage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-20">
        <PageHeader 
          title={id ? `تفاصيل الخدمة رقم ${id}` : 'جدول الطلبات'}
          subtitle={id ? 'عرض تفاصيل وحالة الخدمة المحددة' : 'إدارة وتتبع حالة الطلبات'}
        />
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:gap-10">
          <div className="bg-white rounded-lg shadow-md p-6">
            <Button onClick={() => navigate('/request')} className="w-full bg-[#fc2f2f] hover:bg-[#fc2f2f]/90 text-white text-lg py-3 mb-4">
              اضافة طلب جديد
            </Button>
            <ServiceTracker />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSchedulePage;
