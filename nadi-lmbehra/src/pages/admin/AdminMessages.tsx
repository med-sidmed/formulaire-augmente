
import React, { useState } from 'react';
import AdminSidebar from '@/components/AdminSidebar';
import { MessageSquare, Reply, Archive, Trash2, Search, Filter } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const AdminMessages = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [replyText, setReplyText] = useState('');

  const messages = [
    {
      id: 1,
      name: 'أحمد محمد',
      email: 'ahmed@example.com',
      subject: 'استفسار عن دورة التصوير',
      message: 'مرحباً، أريد معرفة المزيد عن دورة التصوير الفوتوغرافي المقبلة. ما هي المتطلبات والرسوم؟',
      date: '2024-01-15',
      time: '10:30',
      status: 'جديد',
      priority: 'عالية'
    },
    {
      id: 2,
      name: 'فاطمة الأحمد',
      email: 'fatima@example.com',
      subject: 'مشكلة في التسجيل',
      message: 'أواجه مشكلة في التسجيل في الموقع. الصفحة لا تستجيب عند الضغط على زر التسجيل.',
      date: '2024-01-14',
      time: '16:45',
      status: 'قيد المعالجة',
      priority: 'متوسطة'
    },
    {
      id: 3,
      name: 'خالد السالم',
      email: 'khalid@example.com',
      subject: 'اقتراح فعالية جديدة',
      message: 'أقترح إضافة دورة لتعلم الشطرنج للأطفال والكبار. أعتقد أنها ستكون مفيدة جداً.',
      date: '2024-01-13',
      time: '14:20',
      status: 'مكتمل',
      priority: 'منخفضة'
    },
    {
      id: 4,
      name: 'نورا عبدالله',
      email: 'nora@example.com',
      subject: 'طلب انضمام للنادي',
      message: 'أود الانضمام للنادي والمشاركة في الأنشطة الثقافية. كيف يمكنني التسجيل؟',
      date: '2024-01-12',
      time: '09:15',
      status: 'جديد',
      priority: 'عالية'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'جديد': return 'bg-blue-100 text-blue-800';
      case 'قيد المعالجة': return 'bg-yellow-100 text-yellow-800';
      case 'مكتمل': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'عالية': return 'bg-red-100 text-red-800';
      case 'متوسطة': return 'bg-orange-100 text-orange-800';
      case 'منخفضة': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleReply = (messageId) => {
    console.log('Replying to message:', messageId, 'Reply:', replyText);
    setReplyText('');
  };

  return (
    <div className="flex min-h-screen bg-gray-100" dir="rtl">
      <AdminSidebar />
      
      <div className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">الرسائل والدعم</h1>
          <p className="text-gray-600">إدارة رسائل الأعضاء وطلبات الدعم</p>
        </div>

        {/* Filters and Search */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="البحث في الرسائل..."
                    className="pr-10"
                  />
                </div>
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">جميع الرسائل</SelectItem>
                  <SelectItem value="new">جديد</SelectItem>
                  <SelectItem value="processing">قيد المعالجة</SelectItem>
                  <SelectItem value="completed">مكتمل</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all-priority">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-priority">جميع الأولويات</SelectItem>
                  <SelectItem value="high">عالية</SelectItem>
                  <SelectItem value="medium">متوسطة</SelectItem>
                  <SelectItem value="low">منخفضة</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Messages List */}
        <div className="grid gap-4">
          {messages.map((message) => (
            <Card key={message.id} className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-lg">{message.name}</h3>
                      <Badge className={getStatusColor(message.status)}>
                        {message.status}
                      </Badge>
                      <Badge className={getPriorityColor(message.priority)}>
                        {message.priority}
                      </Badge>
                    </div>
                    <p className="text-gray-600 text-sm mb-1">{message.email}</p>
                    <h4 className="font-medium mb-2">{message.subject}</h4>
                    <p className="text-gray-700 mb-4 line-clamp-2">{message.message}</p>
                  </div>
                  <div className="text-left text-sm text-gray-500">
                    <p>{message.date}</p>
                    <p>{message.time}</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" className="flex items-center gap-2">
                        <Reply className="h-4 w-4" />
                        رد
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl" dir="rtl">
                      <DialogHeader>
                        <DialogTitle>الرد على: {message.subject}</DialogTitle>
                        <DialogDescription>
                          رد على رسالة من {message.name} ({message.email})
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-sm text-gray-600 mb-2">الرسالة الأصلية:</p>
                          <p className="text-gray-800">{message.message}</p>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="reply">ردك:</Label>
                          <Textarea
                            id="reply"
                            value={replyText}
                            onChange={(e) => setReplyText(e.target.value)}
                            rows={5}
                            placeholder="اكتب ردك هنا..."
                          />
                        </div>
                        <div className="flex gap-2">
                          <Button onClick={() => handleReply(message.id)}>
                            إرسال الرد
                          </Button>
                          <Button variant="outline">
                            حفظ كمسودة
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Button size="sm" variant="outline" className="flex items-center gap-2">
                    <Archive className="h-4 w-4" />
                    أرشفة
                  </Button>

                  <Button size="sm" variant="outline" className="flex items-center gap-2 text-red-600 hover:text-red-700">
                    <Trash2 className="h-4 w-4" />
                    حذف
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">{messages.filter(m => m.status === 'جديد').length}</p>
                <p className="text-sm text-gray-600">رسائل جديدة</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-yellow-600">{messages.filter(m => m.status === 'قيد المعالجة').length}</p>
                <p className="text-sm text-gray-600">قيد المعالجة</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">{messages.filter(m => m.status === 'مكتمل').length}</p>
                <p className="text-sm text-gray-600">مكتملة</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-red-600">{messages.filter(m => m.priority === 'عالية').length}</p>
                <p className="text-sm text-gray-600">أولوية عالية</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminMessages;
