
import React, { useState } from 'react';
import AdminSidebar from '@/components/AdminSidebar';
import { Settings, Save, Upload, Palette, Shield, Database } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const AdminSettings = () => {
  const [settings, setSettings] = useState({
    siteName: 'النادي الثقافي الرياضي',
    siteDescription: 'نادي متميز يجمع بين الثقافة والرياضة',
    contactEmail: 'info@club.com',
    contactPhone: '+966501234567',
    maintenanceMode: false,
    allowRegistration: true,
    emailNotifications: true,
  });

  const handleSave = () => {
    console.log('Saving settings:', settings);
    // Here you would typically save to backend
  };

  return (
    <div className="flex min-h-screen bg-gray-100" dir="rtl">
      <AdminSidebar />
      
      <div className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">إعدادات الموقع</h1>
          <p className="text-gray-600">إدارة إعدادات النادي والموقع الإلكتروني</p>
        </div>

        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="general">عام</TabsTrigger>
            <TabsTrigger value="appearance">المظهر</TabsTrigger>
            <TabsTrigger value="security">الأمان</TabsTrigger>
            <TabsTrigger value="backup">النسخ الاحتياطي</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>المعلومات الأساسية</CardTitle>
                <CardDescription>إعدادات عامة للموقع والنادي</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="siteName">اسم النادي</Label>
                    <Input
                      id="siteName"
                      value={settings.siteName}
                      onChange={(e) => setSettings({...settings, siteName: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactEmail">البريد الإلكتروني</Label>
                    <Input
                      id="contactEmail"
                      type="email"
                      value={settings.contactEmail}
                      onChange={(e) => setSettings({...settings, contactEmail: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="siteDescription">وصف النادي</Label>
                  <Textarea
                    id="siteDescription"
                    value={settings.siteDescription}
                    onChange={(e) => setSettings({...settings, siteDescription: e.target.value})}
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactPhone">رقم الهاتف</Label>
                  <Input
                    id="contactPhone"
                    value={settings.contactPhone}
                    onChange={(e) => setSettings({...settings, contactPhone: e.target.value})}
                  />
                </div>

                <div className="flex items-center space-x-2 space-x-reverse">
                  <Switch
                    checked={settings.allowRegistration}
                    onCheckedChange={(checked) => setSettings({...settings, allowRegistration: checked})}
                  />
                  <Label>السماح بالتسجيل الجديد</Label>
                </div>

                <div className="flex items-center space-x-2 space-x-reverse">
                  <Switch
                    checked={settings.emailNotifications}
                    onCheckedChange={(checked) => setSettings({...settings, emailNotifications: checked})}
                  />
                  <Label>إشعارات البريد الإلكتروني</Label>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="appearance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5" />
                  إعدادات المظهر
                </CardTitle>
                <CardDescription>تخصيص شكل ومظهر الموقع</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>شعار النادي</Label>
                  <div className="flex items-center gap-4">
                    <Button variant="outline" className="flex items-center gap-2">
                      <Upload className="h-4 w-4" />
                      رفع شعار جديد
                    </Button>
                    <p className="text-sm text-gray-500">PNG, JPG أو SVG (الحد الأقصى 2MB)</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>اللون الأساسي</Label>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-emerald-600 rounded cursor-pointer border-2 border-gray-300"></div>
                    <div className="w-8 h-8 bg-blue-600 rounded cursor-pointer"></div>
                    <div className="w-8 h-8 bg-purple-600 rounded cursor-pointer"></div>
                    <div className="w-8 h-8 bg-orange-600 rounded cursor-pointer"></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>نمط الموقع</Label>
                  <Select defaultValue="light">
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">فاتح</SelectItem>
                      <SelectItem value="dark">داكن</SelectItem>
                      <SelectItem value="auto">تلقائي</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  إعدادات الأمان
                </CardTitle>
                <CardDescription>إدارة أمان الموقع والصلاحيات</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Switch
                    checked={settings.maintenanceMode}
                    onCheckedChange={(checked) => setSettings({...settings, maintenanceMode: checked})}
                  />
                  <Label>وضع الصيانة</Label>
                </div>
                <p className="text-sm text-gray-500">
                  عند التفعيل، سيظهر للزوار صفحة صيانة فقط
                </p>

                <div className="space-y-2">
                  <Label>كلمة مرور المسؤول</Label>
                  <Button variant="outline">تغيير كلمة المرور</Button>
                </div>

                <div className="space-y-2">
                  <Label>سجل نشاط المستخدمين</Label>
                  <Button variant="outline">عرض السجل</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="backup" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  النسخ الاحتياطي
                </CardTitle>
                <CardDescription>إدارة النسخ الاحتياطي لبيانات النادي</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>النسخ الاحتياطي التلقائي</Label>
                  <Select defaultValue="weekly">
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="daily">يومياً</SelectItem>
                      <SelectItem value="weekly">أسبوعياً</SelectItem>
                      <SelectItem value="monthly">شهرياً</SelectItem>
                      <SelectItem value="disabled">معطل</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex gap-4">
                  <Button className="flex items-center gap-2">
                    <Database className="h-4 w-4" />
                    إنشاء نسخة احتياطية الآن
                  </Button>
                  <Button variant="outline">استعادة من نسخة احتياطية</Button>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>آخر نسخة احتياطية:</strong> 2024-01-15 - 14:30
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-8">
          <Button onClick={handleSave} className="flex items-center gap-2">
            <Save className="h-4 w-4" />
            حفظ الإعدادات
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
