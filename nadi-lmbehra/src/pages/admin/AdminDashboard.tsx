
import React from 'react';
import AdminSidebar from '@/components/AdminSidebar';
import { Users, Calendar, Image, FileText, TrendingUp, Bell } from 'lucide-react';

const AdminDashboard = () => {
  const stats = [
    { title: 'إجمالي الأعضاء', value: '248', icon: Users, color: 'bg-blue-500' },
    { title: 'الفعاليات هذا الشهر', value: '12', icon: Calendar, color: 'bg-green-500' },
    { title: 'الصور في المعرض', value: '156', icon: Image, color: 'bg-purple-500' },
    { title: 'المقالات المنشورة', value: '34', icon: FileText, color: 'bg-orange-500' },
  ];

  const recentActivities = [
    { title: 'تسجيل عضو جديد: أحمد محمد', time: 'منذ 10 دقائق', type: 'member' },
    { title: 'نشر مقال جديد: نشاطات الأسبوع', time: 'منذ ساعة', type: 'news' },
    { title: 'تسجيل في فعالية: دورة التصوير', time: 'منذ 3 ساعات', type: 'event' },
    { title: 'رفع صور جديدة للمعرض', time: 'منذ 5 ساعات', type: 'gallery' },
  ];

  const upcomingEvents = [
    { title: 'دورة التصوير الفوتوغرافي', date: '2024-01-15', participants: 25 },
    { title: 'مباراة كرة القدم', date: '2024-01-18', participants: 40 },
    { title: 'معرض الفنون التشكيلية', date: '2024-01-20', participants: 15 },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100" dir="rtl">
      <AdminSidebar />
      
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">لوحة التحكم الرئيسية</h1>
          <p className="text-gray-600">مرحباً بك في واجهة إدارة النادي الثقافي الرياضي</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-full`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activities */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Bell className="h-5 w-5 text-blue-500 ml-2" />
              <h2 className="text-xl font-semibold text-gray-800">الأنشطة الأخيرة</h2>
            </div>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-gray-800 font-medium">{activity.title}</p>
                    <p className="text-gray-500 text-sm">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Calendar className="h-5 w-5 text-green-500 ml-2" />
              <h2 className="text-xl font-semibold text-gray-800">الفعاليات القادمة</h2>
            </div>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="border-r-4 border-green-500 pr-4">
                  <h3 className="font-semibold text-gray-800">{event.title}</h3>
                  <p className="text-gray-600 text-sm">التاريخ: {event.date}</p>
                  <p className="text-gray-600 text-sm">المشاركون: {event.participants}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">إجراءات سريعة</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
              إضافة عضو جديد
            </button>
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
              إنشاء فعالية جديدة
            </button>
            <button className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition">
              نشر مقال جديد
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
