import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { User, Mail, Calendar, Archive, Package } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import AccountBalanceCard from "@/components/auth/AccountBalanceCard";

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-20">
        <PageHeader
          title="الملف الشخصي"
          subtitle="إدارة معلومات حسابك الشخصي"
        />
      </div>

      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card>
            <CardContent className="space-y-4 p-8">
              <div className="flex items-center gap-4 bg-gray-50 rounded-lg p-4">
                <User className="w-6 h-6 text-gray-500" />
                <div>
                  <div className="text-sm text-gray-500">الاسم</div>
                  <div className="font-semibold">{user.name}</div>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-gray-50 rounded-lg p-4">
                <Mail className="w-6 h-6 text-gray-500" />
                <div>
                  <div className="text-sm text-gray-500">البريد الإلكتروني</div>
                  <div className="font-semibold">{user.email}</div>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-gray-50 rounded-lg p-4">
                <Calendar className="w-6 h-6 text-gray-500" />
                <div>
                  <div className="text-sm text-gray-500">تاريخ الانضمام</div>
                  <div className="font-semibold">{new Date(user.joinDate).toLocaleDateString('ar-SA')}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle><Package className="mr-2 inline-block h-4 w-4" />الخدمات قيد التنفيذ</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Display services in progress here */}
              <p>لا توجد خدمات قيد التنفيذ حاليا.</p>
            </CardContent>
          </Card>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle><Archive className="mr-2 inline-block h-4 w-4" />أرشيف الخدمات المكتملة</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Display archive of completed services here */}
              <p>لا يوجد أرشيف للخدمات المكتملة حتى الآن.</p>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-1">
          <AccountBalanceCard />
        </div>
      </div>
    </div>
  );
};

export default Profile;
