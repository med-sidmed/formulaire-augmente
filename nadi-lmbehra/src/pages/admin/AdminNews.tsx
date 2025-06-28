
import React, { useState } from 'react';
import AdminSidebar from '@/components/AdminSidebar';
import { Plus, Edit, Trash2, Eye, MessageSquare, Calendar, User } from 'lucide-react';

const AdminNews = () => {
  const [filter, setFilter] = useState('all');

  const articles = [
    {
      id: 1,
      title: 'انطلاق البطولة السنوية لكرة القدم',
      excerpt: 'تنطلق غداً البطولة السنوية لكرة القدم بمشاركة 8 فرق من النادي...',
      author: 'أحمد محمد',
      date: '2024-01-10',
      status: 'منشور',
      views: 245,
      comments: 12,
      category: 'رياضة'
    },
    {
      id: 2,
      title: 'معرض الفنون التشكيلية الجديد',
      excerpt: 'يفتتح النادي معرضاً جديداً للفنون التشكيلية يضم أعمال الفنانين المحليين...',
      author: 'فاطمة عبدالله',
      date: '2024-01-08',
      status: 'مسودة',
      views: 0,
      comments: 0,
      category: 'ثقافة'
    },
    {
      id: 3,
      title: 'ورشة التصوير الفوتوغرافي',
      excerpt: 'ورشة تدريبية متخصصة في التصوير الفوتوغرافي للمبتدئين والمتقدمين...',
      author: 'محمد علي',
      date: '2024-01-05',
      status: 'منشور',
      views: 189,
      comments: 8,
      category: 'تدريب'
    },
  ];

  const filteredArticles = filter === 'all' ? articles : articles.filter(article => 
    filter === 'published' ? article.status === 'منشور' : article.status === 'مسودة'
  );

  const getStatusColor = (status: string) => {
    return status === 'منشور' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800';
  };

  return (
    <div className="flex min-h-screen bg-gray-100" dir="rtl">
      <AdminSidebar />
      
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">إدارة المدونة والأخبار</h1>
          <p className="text-gray-600">إنشاء وإدارة المحتوى الإخباري</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">إجمالي المقالات</p>
                <p className="text-2xl font-bold text-blue-600">{articles.length}</p>
              </div>
              <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">📝</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">المقالات المنشورة</p>
                <p className="text-2xl font-bold text-green-600">
                  {articles.filter(a => a.status === 'منشور').length}
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
                <p className="text-gray-600 text-sm">إجمالي المشاهدات</p>
                <p className="text-2xl font-bold text-purple-600">
                  {articles.reduce((sum, a) => sum + a.views, 0)}
                </p>
              </div>
              <Eye className="h-8 w-8 text-purple-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">إجمالي التعليقات</p>
                <p className="text-2xl font-bold text-orange-600">
                  {articles.reduce((sum, a) => sum + a.comments, 0)}
                </p>
              </div>
              <MessageSquare className="h-8 w-8 text-orange-500" />
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex bg-gray-200 rounded-lg p-1">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-4 py-2 rounded-md text-sm transition ${
                    filter === 'all' ? 'bg-white shadow-sm font-medium' : 'hover:bg-gray-300'
                  }`}
                >
                  الكل ({articles.length})
                </button>
                <button
                  onClick={() => setFilter('published')}
                  className={`px-4 py-2 rounded-md text-sm transition ${
                    filter === 'published' ? 'bg-white shadow-sm font-medium' : 'hover:bg-gray-300'
                  }`}
                >
                  منشور ({articles.filter(a => a.status === 'منشور').length})
                </button>
                <button
                  onClick={() => setFilter('draft')}
                  className={`px-4 py-2 rounded-md text-sm transition ${
                    filter === 'draft' ? 'bg-white shadow-sm font-medium' : 'hover:bg-gray-300'
                  }`}
                >
                  مسودة ({articles.filter(a => a.status === 'مسودة').length})
                </button>
              </div>
            </div>
            
            <button className="flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
              <Plus className="h-5 w-5 ml-2" />
              مقال جديد
            </button>
          </div>
        </div>

        {/* Articles List */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="space-y-0">
            {filteredArticles.map((article) => (
              <div key={article.id} className="border-b border-gray-200 p-6 hover:bg-gray-50 transition">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-gray-800">{article.title}</h3>
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(article.status)}`}>
                        {article.status}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">{article.excerpt}</p>
                    
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        <span>{article.views} مشاهدة</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="h-4 w-4" />
                        <span>{article.comments} تعليق</span>
                      </div>
                      <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mr-4">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm text-gray-700">
            عرض 1 إلى {filteredArticles.length} من أصل {articles.length} مقال
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50">السابق</button>
            <button className="px-3 py-1 bg-blue-500 text-white rounded-md text-sm">1</button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50">التالي</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNews;
