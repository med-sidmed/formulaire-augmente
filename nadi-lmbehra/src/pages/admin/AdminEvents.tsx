
import React, { useState } from 'react';
import AdminSidebar from '@/components/AdminSidebar';
import { Calendar, Plus, Edit, Trash2, Users, MapPin, Clock } from 'lucide-react';

const AdminEvents = () => {
  const events = [
    {
      id: 1,
      title: 'دورة التصوير الفوتوغرافي',
      type: 'ثقافي',
      date: '2024-01-15',
      time: '18:00',
      location: 'قاعة الفنون',
      instructor: 'أحمد المصور',
      capacity: 30,
      registered: 25,
      status: 'مفتوح',
      description: 'دورة تدريبية لتعلم أساسيات التصوير الفوتوغرافي'
    },
    {
      id: 2,
      title: 'مباراة كرة القدم',
      type: 'رياضي',
      date: '2024-01-18',
      time: '16:00',
      location: 'الملعب الرئيسي',
      instructor: 'محمد المدرب',
      capacity: 40,
      registered: 40,
      status: 'مكتمل',
      description: 'مباراة ودية بين فرق النادي'
    },
    {
      id: 3,
      title: 'معرض الفنون التشكيلية',
      type: 'ثقافي',
      date: '2024-01-20',
      time: '19:00',
      location: 'صالة المعارض',
      instructor: 'فاطمة الفنانة',
      capacity: 50,
      registered: 15,
      status: 'مفتوح',
      description: 'معرض لأعمال الفنانين المحليين'
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100" dir="rtl">
      <AdminSidebar />
      
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">إدارة الأنشطة والفعاليات</h1>
          <p className="text-gray-600">تنظيم ومتابعة فعاليات النادي</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">إجمالي الفعاليات</p>
                <p className="text-2xl font-bold text-gray-800">{events.length}</p>
              </div>
              <Calendar className="h-8 w-8 text-blue-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">الفعاليات المفتوحة</p>
                <p className="text-2xl font-bold text-green-600">
                  {events.filter(e => e.status === 'مفتوح').length}
                </p>
              </div>
              <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">إجمالي المشاركين</p>
                <p className="text-2xl font-bold text-purple-600">
                  {events.reduce((sum, e) => sum + e.registered, 0)}
                </p>
              </div>
              <Users className="h-8 w-8 text-purple-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">معدل الإشغال</p>
                <p className="text-2xl font-bold text-orange-600">
                  {Math.round((events.reduce((sum, e) => sum + e.registered, 0) / events.reduce((sum, e) => sum + e.capacity, 0)) * 100)}%
                </p>
              </div>
              <div className="h-8 w-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Add Event Button */}
        <div className="mb-6">
          <button className="flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            <Plus className="h-5 w-5 ml-2" />
            إضافة فعالية جديدة
          </button>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className={`h-2 ${event.type === 'ثقافي' ? 'bg-purple-500' : 'bg-green-500'}`}></div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    event.status === 'مفتوح' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {event.status}
                  </span>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 ml-2" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 ml-2" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 ml-2" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 ml-2" />
                    <span className="text-sm">{event.registered}/{event.capacity} مشارك</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4">{event.description}</p>

                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>نسبة الإشغال</span>
                    <span>{Math.round((event.registered / event.capacity) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        event.registered === event.capacity ? 'bg-red-500' : 'bg-blue-500'
                      }`}
                      style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    المشرف: {event.instructor}
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminEvents;
