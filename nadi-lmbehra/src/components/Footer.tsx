
import { Trophy } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 space-x-reverse mb-4">
              <Trophy className="h-8 w-8 text-amber-400" />
              <h3 className="text-xl font-bold">النادي الثقافي الرياضي</h3>
            </div>
            <p className="text-gray-400">
              نادي شامل يجمع بين الأنشطة الثقافية والرياضية لخدمة المجتمع وتنمية المواهب
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">عن النادي</a></li>
              <li><a href="#" className="hover:text-white transition-colors">الأنشطة</a></li>
              <li><a href="#" className="hover:text-white transition-colors">العضوية</a></li>
              <li><a href="#" className="hover:text-white transition-colors">الأخبار</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">الأنشطة</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">الأنشطة الرياضية</a></li>
              <li><a href="#" className="hover:text-white transition-colors">الأنشطة الثقافية</a></li>
              <li><a href="#" className="hover:text-white transition-colors">الدورات التدريبية</a></li>
              <li><a href="#" className="hover:text-white transition-colors">المسابقات</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">تابعنا</h4>
            <div className="flex space-x-4 space-x-reverse">
              {['📘', '📷', '🐦', '📱'].map((icon, index) => (
                <a key={index} href="#" className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center hover:bg-emerald-700 transition-colors">
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 النادي الثقافي الرياضي. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
