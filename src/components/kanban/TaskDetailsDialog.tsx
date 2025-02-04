import React from 'react';
import { Task } from './TaskCard';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

interface TaskDetailsDialogProps {
  task: Task | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TaskDetailsDialog: React.FC<TaskDetailsDialogProps> = ({ task, open, onOpenChange }) => {
  if (!task) {
    return null;
  }

  const priorityLabels = {
    low: 'منخفضة',
    medium: 'متوسطة',
    high: 'عالية',
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{task.title}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div>
            <Label htmlFor="title">الوصف</Label>
            <p className="text-gray-700">{task.description || 'لا يوجد وصف'}</p>
          </div>
          <div>
            <Label htmlFor="priority">الأولوية</Label>
            <p className={`text-gray-700 ${task.priority ? '' : 'italic'}`}>{task.priority ? priorityLabels[task.priority] : 'غير محددة'}</p>
          </div>
          <div>
            <Label htmlFor="dueDate">تاريخ الاستحقاق</Label>
            <p className="text-gray-700">{task.dueDate ? new Date(task.dueDate).toLocaleDateString('ar-EG') : 'غير محدد'}</p>
          </div>
          <div>
            <Label htmlFor="assignee">المسؤول</Label>
            <p className="text-gray-700">{task.assignee || 'غير محدد'}</p>
          </div>
          {task.labels && task.labels.length > 0 && (
            <div>
              <Label htmlFor="labels">التصنيفات</Label>
              <div className="flex flex-wrap gap-2">
                {task.labels.map((label, index) => (
                  <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                    {label}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TaskDetailsDialog;