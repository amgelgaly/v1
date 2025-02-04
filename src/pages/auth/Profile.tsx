import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { User as AuthUser, AuthContextType } from "@/contexts/AuthContext";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import PageHeader from "@/components/layout/PageHeader";
import ProfileInfo from "@/components/auth/ProfileInfo";
import AccountBalance from "@/components/auth/AccountBalance";
import { User as IconUser, Mail as IconMail, Calendar as IconCalendar, ArrowLeft } from "lucide-react";

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth() as AuthContextType;

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

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <IconUser className="w-6 h-6 text-gray-500" />
                <div>
                  <div className="text-sm text-gray-500">الاسم</div>
                  <div className="font-medium">{user.name}</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <IconMail className="w-6 h-6 text-gray-500" />
                <div>
                  <div className="text-sm text-gray-500">البريد الإلكتروني</div>
                  <div className="font-medium">{user.email}</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <IconCalendar className="w-6 h-6 text-gray-500" />
                <div>
                  <div className="text-sm text-gray-500">تاريخ الانضمام</div>
                  <div className="font-medium">{new Date(user.joinDate).toLocaleDateString('ar-SA')}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
