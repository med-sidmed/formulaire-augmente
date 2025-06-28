
import { Trophy, Users, Calendar, Award } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-emerald-50" dir="rtl">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-900/10 to-amber-900/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">عن النادي</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نادي رائد في المجال الثقافي والرياضي، نسعى لبناء مجتمع متماسك ومبدع
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">قصتنا</h2>
              <p className="text-gray-600 mb-4">
                تأسس النادي الثقافي الرياضي في عام 2010 برؤية واضحة: خلق مساحة آمنة ومحفزة 
                للشباب والكبار لتطوير مواهبهم وقدراتهم في مختلف المجالات الثقافية والرياضية.
              </p>
              <p className="text-gray-600 mb-4">
                منذ تأسيسه، نجح النادي في تخريج مئات الشباب المتميزين الذين أصبحوا قادة 
                في مجتمعهم، كما حقق العديد من الإنجازات المحلية والإقليمية.
              </p>
              <p className="text-gray-600">
                اليوم، نواصل مسيرتنا بحماس أكبر، مع التزامنا بتقديم أفضل الخدمات والبرامج 
                لأعضائنا الكرام.
              </p>
            </div>
            <div className="bg-emerald-100 p-8 rounded-lg">
              <div className="text-6xl text-center mb-4">🏛️</div>
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">مبنى النادي</h3>
              <p className="text-gray-600 text-center">
                مرافق حديثة ومتطورة تشمل صالات رياضية، قاعات ثقافية، ومساحات للأنشطة المتنوعة
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">قيمنا</h2>
            <p className="text-xl text-gray-600">المبادئ التي نؤمن بها ونعمل وفقاً لها</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Trophy className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">التميز</h3>
              <p className="text-gray-600">نسعى للتميز في كل ما نقوم به</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Users className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">التعاون</h3>
              <p className="text-gray-600">نؤمن بقوة العمل الجماعي</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">الالتزام</h3>
              <p className="text-gray-600">ملتزمون بخدمة مجتمعنا</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">الإبداع</h3>
              <p className="text-gray-600">نشجع الإبداع والابتكار</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">الفريق الإداري</h2>
            <p className="text-xl text-gray-600">قادة النادي الذين يعملون لخدمتكم</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-emerald-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">👨‍💼</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">رئيس النادي</h3>
              <p className="text-gray-600">يقود رؤية النادي ويشرف على جميع الأنشطة</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-amber-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">👩‍💼</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">مدير الأنشطة</h3>
              <p className="text-gray-600">ينسق ويخطط لجميع الفعاليات والأنشطة</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">👨‍🏫</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">المدرب العام</h3>
              <p className="text-gray-600">يشرف على البرامج التدريبية والرياضية</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
