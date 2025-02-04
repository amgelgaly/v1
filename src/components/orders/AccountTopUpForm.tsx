import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CreditCardIcon, BanknoteIcon, BankIcon } from '@radix-ui/react-icons';

const AccountTopUpForm = () => {
  return (
    <div className="w-full max-w-sm space-y-4">
      <h2 className="text-2xl font-bold tracking-tight">Account Top-up</h2>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="amount">Top-up Amount</Label>
          <Input type="number" id="amount" placeholder="Enter amount" className="col-span-3" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="paymentMethod">Payment Method</Label>
          <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="paymentMethod">
            <option value="">Select Payment Method</option>
            <option value="creditCard">Credit Card <CreditCardIcon className="ml-2 inline-block" /></option>
            <option value="paypal">PayPal <BanknoteIcon className="ml-2 inline-block" /></option>
            <option value="bankTransfer">Bank Transfer <BankIcon className="ml-2 inline-block" /></option>
          </select>
        </div>
        <Button className="w-full">Top-up Account</Button>
      </div>
    </div>
  );
};

export default AccountTopUpForm;