import { User, Mail, Calendar } from "lucide-react";

interface ProfileInfoProps {
  user: {
    name: string;
    email: string;
    joinDate: string;
  };
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ user }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 p-4">
        <User className="w-6 h-6 text-gray-500" />
        <div>
          <div className="text-sm text-gray-500">الاسم</div>
          <div className="font-medium">{user.name}</div>
        </div>
      </div>

      <div className="flex items-center gap-4 p-4">
        <Mail className="w-6 h-6 text-gray-500" />
        <div>
          <div className="text-sm text-gray-500">البريد الإلكتروني</div>
          <div className="font-medium">{user.email}</div>
        </div>
      </div>

      <div className="flex items-center gap-4 p-4">
        <Calendar className="w-6 h-6 text-gray-500" />
        <div>
          <div className="text-sm text-gray-500">تاريخ الانضمام</div>
          <div className="font-medium">{new Date(user.joinDate).toLocaleDateString('ar-SA')}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;