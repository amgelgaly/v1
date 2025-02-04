import React from 'react';
import { Mail, User } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

const ContactDetailsForm = () => {
  return (
    <Card className="p-6 space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Leave us your details</h2>
      <div className="grid gap-4">
        <div className="flex items-center space-x-2">
          <Mail className="w-5 h-5 text-gray-500" />
          <Input type="email" placeholder="Your Email" />
        </div>
        <div className="flex items-center space-x-2">
          <User className="w-5 h-5 text-gray-500" />
          <Input type="text" placeholder="Your Name" />
        </div>
        <div>
          <Textarea placeholder="Leave a note" className="resize-none" />
        </div>
        <button className="bg-primary text-white font-semibold rounded-md px-4 py-2 hover:bg-primary/90 transition-colors duration-300">
          Submit
        </button>
      </div>
    </Card>
  );
};

export default ContactDetailsForm;