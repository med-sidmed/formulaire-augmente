
import React, { useState } from 'react';
import AdminSidebar from '@/components/AdminSidebar';
import { Upload, Image, Video, Folder, Grid, List, Search, Filter } from 'lucide-react';

const AdminGallery = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');

  const mediaItems = [
    { id: 1, name: 'صورة المباراة الأخيرة', type: 'image', date: '2024-01-10', size: '2.5 MB', album: 'الأنشطة الرياضية' },
    { id: 2, name: 'فيديو الحفل الثقافي', type: 'video', date: '2024-01-08', size: '15.2 MB', album: 'الفعاليات الثقافية' },
    { id: 3, name: 'معرض الفنون', type: 'image', date: '2024-01-05', size: '1.8 MB', album: 'المعارض' },
    { id: 4, name: 'دورة التدريب', type: 'image', date: '2024-01-03', size: '3.1 MB', album: 'التدريب' },
  ];

  const albums = [
    { name: 'الأنشطة الرياضية', count: 45, thumbnail: '🏃‍♂️' },
    { name: 'الفعاليات الثقافية', count: 32, thumbnail: '🎭' },
    { name: 'المعارض', count: 28, thumbnail: '🖼️' },
    { name: 'التدريب', count: 19, thumbnail: '📚' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100" dir="rtl">
      <AdminSidebar />
      
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">إدارة المعرض والوسائط</h1>
          <p className="text-gray-600">تنظيم وإدارة الصور والفيديوهات</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">إجمالي الصور</p>
                <p className="text-2xl font-bold text-blue-600">124</p>
              </div>
              <Image className="h-8 w-8 text-blue-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">الفيديوهات</p>
                <p className="text-2xl font-bold text-purple-600">18</p>
              </div>
              <Video className="h-8 w-8 text-purple-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">الألبومات</p>
                <p className="text-2xl font-bold text-green-600">{albums.length}</p>
              </div>
              <Folder className="h-8 w-8 text-green-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">المساحة المستخدمة</p>
                <p className="text-2xl font-bold text-orange-600">2.1 GB</p>
              </div>
              <div className="h-8 w-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">💾</span>
              </div>
            </div>
          </div>
        </div>

        {/* Albums Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">الألبومات</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {albums.map((album, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition cursor-pointer">
                <div className="text-center mb-3">
                  <div className="text-4xl mb-2">{album.thumbnail}</div>
                  <h3 className="font-semibold text-gray-800">{album.name}</h3>
                  <p className="text-gray-600 text-sm">{album.count} عنصر</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="h-5 w-5 absolute right-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="البحث في الوسائط..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pr-10 pl-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
                <Filter className="h-4 w-4 ml-2" />
                تصفية
              </button>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="flex bg-gray-200 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition ${
                    viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-300'
                  }`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition ${
                    viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-300'
                  }`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
              
              <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                <Upload className="h-4 w-4 ml-2" />
                رفع ملفات
              </button>
            </div>
          </div>
        </div>

        {/* Media Items */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
              {mediaItems.map((item) => (
                <div key={item.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                  <div className="aspect-square bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                    {item.type === 'image' ? (
                      <Image className="h-12 w-12 text-gray-400" />
                    ) : (
                      <Video className="h-12 w-12 text-gray-400" />
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-800 text-sm mb-1 truncate">{item.name}</h3>
                  <p className="text-gray-600 text-xs mb-1">{item.album}</p>
                  <p className="text-gray-500 text-xs">{item.size} • {item.date}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الاسم</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">النوع</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الألبوم</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الحجم</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">التاريخ</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الإجراءات</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {mediaItems.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {item.type === 'image' ? (
                            <Image className="h-5 w-5 text-blue-500 ml-3" />
                          ) : (
                            <Video className="h-5 w-5 text-purple-500 ml-3" />
                          )}
                          <span className="text-sm font-medium text-gray-900">{item.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {item.type === 'image' ? 'صورة' : 'فيديو'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.album}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.size}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 ml-3">تحرير</button>
                        <button className="text-red-600 hover:text-red-900">حذف</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminGallery;
