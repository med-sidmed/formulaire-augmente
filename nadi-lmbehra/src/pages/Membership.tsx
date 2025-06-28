
import { Check, Star, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Membership = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-emerald-50" dir="rtl">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-900/10 to-amber-900/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">العضوية</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            انضم إلى عائلة النادي واستمتع بجميع المزايا والخدمات المتاحة
          </p>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">خطط العضوية</h2>
            <p className="text-xl text-gray-600">اختر الخطة التي تناسب احتياجاتك</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 text-center">
              <Star className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">عضوية أساسية</h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">٥٠ ريال</div>
              <p className="text-gray-600 mb-6">شهرياً</p>
              
              <ul className="text-right space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 ml-2" />
                  <span>الوصول للمرافق الأساسية</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 ml-2" />
                  <span>المشاركة في الأنشطة العامة</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 ml-2" />
                  <span>خصم ١٠٪ على الفعاليات</span>
                </li>
              </ul>
              
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                اشترك الآن
              </Button>
            </div>

            {/* Premium Plan */}
            <div className="bg-white border-2 border-emerald-500 rounded-lg p-8 text-center relative">
              <Badge className="absolute -top-3 right-1/2 transform translate-x-1/2 bg-emerald-500">
                الأكثر شعبية
              </Badge>
              <Star className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">عضوية مميزة</h3>
              <div className="text-4xl font-bold text-emerald-600 mb-4">١٠٠ ريال</div>
              <p className="text-gray-600 mb-6">شهرياً</p>
              
              <ul className="text-right space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 ml-2" />
                  <span>جميع مزايا العضوية الأساسية</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 ml-2" />
                  <span>الوصول للمرافق المتقدمة</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 ml-2" />
                  <span>دروس خاصة مجانية</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 ml-2" />
                  <span>خصم ٢٠٪ على الفعاليات</span>
                </li>
              </ul>
              
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                اشترك الآن
              </Button>
            </div>

            {/* VIP Plan */}
            <div className="bg-white border-2 border-amber-500 rounded-lg p-8 text-center">
              <Crown className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">عضوية VIP</h3>
              <div className="text-4xl font-bold text-amber-600 mb-4">٢٠٠ ريال</div>
              <p className="text-gray-600 mb-6">شهرياً</p>
              
              <ul className="text-right space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 ml-2" />
                  <span>جميع مزايا العضوية المميزة</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 ml-2" />
                  <span>وصول كامل ٢٤/٧</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 ml-2" />
                  <span>مدرب شخصي</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 ml-2" />
                  <span>أولوية في الحجوزات</span>
                </li>
              </ul>
              
              <Button className="w-full bg-amber-600 hover:bg-amber-700">
                اشترك الآن
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">مزايا العضوية</h2>
            <p className="text-xl text-gray-600">ما الذي ستحصل عليه كعضو في نادينا؟</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">🏋️‍♂️</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">مرافق رياضية</h3>
              <p className="text-gray-600">صالات رياضية حديثة ومجهزة</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">🎭</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">أنشطة ثقافية</h3>
              <p className="text-gray-600">ورش ومعارض وعروض متنوعة</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">مجتمع متميز</h3>
              <p className="text-gray-600">تواصل مع أشخاص يشاركونك الاهتمامات</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">مسابقات</h3>
              <p className="text-gray-600">شارك في مسابقاتنا واربح جوائز قيمة</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Membership;
