
import React from 'react';
import AdminSidebar from '@/components/AdminSidebar';
import { BarChart3, TrendingUp, Users, Calendar, Eye, Download } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AdminStatistics = () => {
  const monthlyStats = [
    { month: 'يناير', visits: 1200, members: 45, events: 8 },
    { month: 'فبراير', visits: 1350, members: 52, events: 10 },
    { month: 'مارس', visits: 1100, members: 38, events: 6 },
    { month: 'أبريل', visits: 1450, members: 61, events: 12 },
  ];

  const popularEvents = [
    { name: 'دورة التصوير الفوتوغرافي', participants: 45, rating: 4.8 },
    { name: 'مباراة كرة القدم', participants: 78, rating: 4.6 },
    { name: 'ورشة الرسم', participants: 32, rating: 4.9 },
    { name: 'محاضرة الأدب العربي', participants: 56, rating: 4.7 },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100" dir="rtl">
      <AdminSidebar />
      
      <div className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">الإحصائيات والتقارير</h1>
          <p className="text-gray-600">تحليل شامل لأداء النادي والأنشطة</p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">نظرة عامة</TabsTrigger>
            <TabsTrigger value="members">الأعضاء</TabsTrigger>
            <TabsTrigger value="events">الفعاليات</TabsTrigger>
            <TabsTrigger value="financial">المالية</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Overview Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">إجمالي الزيارات</CardTitle>
                  <Eye className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24,680</div>
                  <p className="text-xs text-muted-foreground">+15% من الشهر الماضي</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">الأعضاء النشطون</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">186</div>
                  <p className="text-xs text-muted-foreground">+8% من الشهر الماضي</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">الفعاليات المكتملة</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">42</div>
                  <p className="text-xs text-muted-foreground">+12% من الشهر الماضي</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">معدل المشاركة</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">78%</div>
                  <p className="text-xs text-muted-foreground">+5% من الشهر الماضي</p>
                </CardContent>
              </Card>
            </div>

            {/* Monthly Performance Chart */}
            <Card>
              <CardHeader>
                <CardTitle>الأداء الشهري</CardTitle>
                <CardDescription>إحصائيات الأشهر الأربعة الماضية</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 bg-gray-50 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">رسم بياني للأداء الشهري</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="events" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>الفعاليات الأكثر شعبية</CardTitle>
                <CardDescription>ترتيب الفعاليات حسب عدد المشاركين والتقييم</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {popularEvents.map((event, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-semibold">{event.name}</h3>
                        <p className="text-sm text-gray-600">{event.participants} مشارك</p>
                      </div>
                      <div className="text-left">
                        <p className="text-lg font-bold text-yellow-600">⭐ {event.rating}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="members" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>إحصائيات الأعضاء</CardTitle>
                <CardDescription>تحليل بيانات الأعضاء والانضمام</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 bg-gray-50 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">رسم بياني لإحصائيات الأعضاء</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="financial" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>التقرير المالي</CardTitle>
                <CardDescription>الإيرادات والمصروفات الشهرية</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 bg-gray-50 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">رسم بياني للتقرير المالي</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Export Actions */}
        <div className="mt-8 flex gap-4">
          <Button className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            تصدير PDF
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            تصدير Excel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminStatistics;
