import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { User, Mail, Calendar, ArrowLeft } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";

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

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <User className="w-6 h-6 text-gray-500" />
                <div>
                  <div className="text-sm text-gray-500">الاسم</div>
                  <div className="font-medium">{user.name}</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <Mail className="w-6 h-6 text-gray-500" />
                <div>
                  <div className="text-sm text-gray-500">البريد الإلكتروني</div>
                  <div className="font-medium">{user.email}</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <Calendar className="w-6 h-6 text-gray-500" />
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
