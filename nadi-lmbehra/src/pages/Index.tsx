
import { useState, useEffect } from 'react';
import { Calendar, Users, Trophy, BookOpen, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const newsItems = [
    "🏆 فوز فريق النادي بكأس البطولة الإقليمية",
    "📚 افتتاح دورة جديدة في تعليم الخط العربي",
    "🎭 عرض مسرحي جديد يوم الجمعة القادم",
    "⚽ تدريبات كرة القدم للناشئين كل أربعاء",
    "🎨 معرض للوحات الفنية من إبداع أعضاء النادي"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % newsItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-emerald-50" dir="rtl">
      <Navigation />

      {/* News Ticker */}
      <div className="bg-amber-600 text-white py-2 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <Badge variant="secondary" className="bg-white text-amber-600 ml-4">
              أخبار النادي
            </Badge>
            <div className="flex-1 relative h-6">
              <div 
                className="absolute inset-0 flex items-center transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(${currentSlide * -100}%)` }}
              >
                {newsItems.map((news, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <p className="text-sm font-medium">{news}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-900/10 to-amber-900/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            أهلاً وسهلاً بكم في نادينا
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            مجتمع يجمع بين الرياضة والثقافة، حيث ننمي المواهب ونبني الشخصيات ونحقق الإنجازات
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-emerald-700 hover:bg-emerald-800">
              انضم إلينا الآن
              <ArrowRight className="mr-2 h-5 w-5" />
            </Button>
            <Link to="/activities">
              <Button size="lg" variant="outline" className="border-amber-600 text-amber-700 hover:bg-amber-50">
                تعرف على أنشطتنا
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-emerald-700" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800">250+</h3>
              <p className="text-gray-600">عضو نشط</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Trophy className="h-8 w-8 text-amber-700" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800">15</h3>
              <p className="text-gray-600">جائزة وكأس</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Calendar className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800">50+</h3>
              <p className="text-gray-600">فعالية سنوياً</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800">12</h3>
              <p className="text-gray-600">نشاط متنوع</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">استكشف النادي</h2>
            <p className="text-xl text-gray-600">اكتشف مواهبك وطور قدراتك معنا</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/activities" className="group">
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                <div className="text-6xl mb-4">🏃‍♂️</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">الأنشطة الرياضية</h3>
                <p className="text-gray-600">كرة القدم، السلة، السباحة والمزيد</p>
              </div>
            </Link>
            
            <Link to="/activities" className="group">
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                <div className="text-6xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">الأنشطة الثقافية</h3>
                <p className="text-gray-600">الفنون، المسرح، الخط العربي</p>
              </div>
            </Link>
            
            <Link to="/events" className="group">
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                <div className="text-6xl mb-4">📅</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">الفعاليات</h3>
                <p className="text-gray-600">مسابقات، عروض، ورش عمل</p>
              </div>
            </Link>
            
            <Link to="/gallery" className="group">
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                <div className="text-6xl mb-4">🖼️</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">معرض الصور</h3>
                <p className="text-gray-600">لحظات مميزة من أنشطتنا</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
