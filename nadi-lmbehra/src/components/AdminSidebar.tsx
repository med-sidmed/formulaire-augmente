
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  Image, 
  FileText, 
  BarChart3, 
  Settings, 
  MessageSquare,
  Trophy,
  Home
} from 'lucide-react';

const AdminSidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const adminMenuItems = [
    { path: '/admin', label: 'لوحة التحكم', icon: LayoutDashboard },
    { path: '/admin/members', label: 'إدارة الأعضاء', icon: Users },
    { path: '/admin/events', label: 'الأنشطة والفعاليات', icon: Calendar },
    { path: '/admin/gallery', label: 'المعرض والوسائط', icon: Image },
    { path: '/admin/news', label: 'المدونة والأخبار', icon: FileText },
    { path: '/admin/statistics', label: 'الإحصائيات والتقارير', icon: BarChart3 },
    { path: '/admin/settings', label: 'إعدادات الموقع', icon: Settings },
    { path: '/admin/messages', label: 'الرسائل والدعم', icon: MessageSquare },
  ];

  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen" dir="rtl">
      {/* Header */}
      <div className="p-6 border-b border-gray-700">
        <Link to="/" className="flex items-center space-x-3 space-x-reverse">
          <Trophy className="h-8 w-8 text-amber-400" />
          <div>
            <h2 className="text-xl font-bold">واجهة الإدارة</h2>
            <p className="text-gray-400 text-sm">النادي الثقافي الرياضي</p>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="mt-6">
        <Link
          to="/"
          className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
        >
          <Home className="h-5 w-5 ml-3" />
          العودة للموقع الرئيسي
        </Link>
        
        <div className="mt-4">
          {adminMenuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-6 py-3 transition-colors ${
                currentPath === item.path
                  ? 'bg-emerald-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <item.icon className="h-5 w-5 ml-3" />
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default AdminSidebar;
