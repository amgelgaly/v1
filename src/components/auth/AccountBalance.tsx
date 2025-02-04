import { Button } from "@/components/ui/button";
import { CardTitle, CardContent } from "@/components/ui/card";

const AccountBalance = () => {
  return (
    <div className="space-y-6">
      <CardTitle>رصيد الحساب</CardTitle>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between p-4">
          <div className="text-sm text-gray-500">الرصيد الحالي</div>
          <div className="font-medium">100 ر.س</div>
        </div>
        <Button>شحن الرصيد</Button>
      </CardContent>
    </div>
  );
};

export default AccountBalance;