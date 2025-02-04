import React from 'react';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

const AccountTopUpForm = () => {
  return (
    <div className="w-full max-w-sm space-y-2">
      <h2 className="text-2xl font-bold tracking-tight">Account Top-up</h2>
      <div className="grid gap-2">
        <div className="grid gap-1">
          <Label htmlFor="amount">Top-up Amount</Label>
          <Input type="number" id="amount" placeholder="Enter amount" />
        </div>
        <div className="grid gap-1">
          <Label htmlFor="paymentMethod">Payment Method</Label>
          <select className="border rounded px-3 py-2" id="paymentMethod">
            <option value="">Select Payment Method</option>
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bankTransfer">Bank Transfer</option>
          </select>
        </div>
        <Button>Top-up Account</Button>
      </div>
    </div>
  );
};

export default AccountTopUpForm;