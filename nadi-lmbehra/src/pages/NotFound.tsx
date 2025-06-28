
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-emerald-50 flex items-center justify-center" dir="rtl">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300">404</h1>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">الصفحة غير موجودة</h2>
          <p className="text-gray-600 text-lg mb-8">
            عذراً، الصفحة التي تبحث عنها غير متوفرة أو تم نقلها
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition"
          >
            <Home className="h-5 w-5 ml-2" />
            العودة للصفحة الرئيسية
          </Link>
          
          <div className="text-sm text-gray-500">
            أو يمكنك استخدام شريط التنقل أعلاه للوصول لأي صفحة تريدها
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
