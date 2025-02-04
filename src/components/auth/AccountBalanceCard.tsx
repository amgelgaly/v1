import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet } from "lucide-react";

const AccountBalanceCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle><Wallet className="mr-2 inline-block h-4 w-4" />رصيد الحساب</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">500 ر.س</p>
        <Button className="mt-4 w-full" asChild>
                  <a href="/profile/orders">شحن الرصيد</a>
                </Button>
      </CardContent>
    </Card>
  );
};

export default AccountBalanceCard;