
import { Users, Star, Trophy, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Activities = () => {
  const activities = [
    {
      id: 1,
      title: "كرة القدم",
      description: "فرق كرة القدم للجميع الأعمار مع مدربين مؤهلين ومعتمدين",
      icon: "⚽",
      category: "رياضي",
      participants: 45,
      level: "جميع المستويات",
      schedule: "الأحد والثلاثاء - 16:00",
      trainer: "الكابتن أحمد محمد",
      achievements: ["بطولة المنطقة 2023", "كأس الصداقة 2024"]
    },
    {
      id: 2,
      title: "الخط العربي",
      description: "تعلم فنون الخط العربي والكتابة التراثية مع أساتذة متخصصين",
      icon: "✍️",
      category: "ثقافي",
      participants: 28,
      level: "مبتدئ - متقدم",
      schedule: "السبت والاثنين - 18:00",
      trainer: "الأستاذ عبدالله الخطاط",
      achievements: ["معرض الخط العربي 2023", "جائزة الإبداع الثقافي"]
    },
    {
      id: 3,
      title: "كرة السلة",
      description: "بطولات وتدريبات كرة السلة للناشئين والكبار",
      icon: "🏀",
      category: "رياضي",
      participants: 32,
      level: "متوسط - متقدم",
      schedule: "الاثنين والخميس - 17:00",
      trainer: "الكابتن سعد العلي",
      achievements: ["دوري الأندية 2024", "كأس التميز"]
    },
    {
      id: 4,
      title: "المسرح",
      description: "فرقة مسرحية تقدم عروض شهرية متنوعة وورش تمثيل",
      icon: "🎭",
      category: "ثقافي",
      participants: 18,
      level: "جميع المستويات",
      schedule: "الأربعاء والجمعة - 19:00",
      trainer: "الفنان محمد السعيد",
      achievements: ["مهرجان المسرح المحلي", "عرض خاص بالنادي"]
    },
    {
      id: 5,
      title: "السباحة",
      description: "دروس السباحة للمبتدئين والمتقدمين مع تقنيات حديثة",
      icon: "🏊",
      category: "رياضي",
      participants: 25,
      level: "مبتدئ - محترف",
      schedule: "يومياً - 15:00 - 20:00",
      trainer: "الكابتن فاطمة أحمد",
      achievements: ["بطولة السباحة الإقليمية", "برنامج الأمان المائي"]
    },
    {
      id: 6,
      title: "الفنون التشكيلية",
      description: "ورش فنية في الرسم والنحت والأعمال اليدوية",
      icon: "🎨",
      category: "ثقافي",
      participants: 22,
      level: "جميع المستويات",
      schedule: "الثلاثاء والجمعة - 16:30",
      trainer: "الفنانة نورا الفنان",
      achievements: ["معرض الإبداع الفني", "ورشة النحت الحديث"]
    }
  ];

  const sportsActivities = activities.filter(activity => activity.category === "رياضي");
  const culturalActivities = activities.filter(activity => activity.category === "ثقافي");

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-emerald-50" dir="rtl">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-900/10 to-amber-900/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">أنشطتنا المتنوعة</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            اكتشف مواهبك وطور قدراتك من خلال مجموعة واسعة من الأنشطة الرياضية والثقافية
          </p>
        </div>
      </section>

      {/* Sports Activities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center">
              <Trophy className="ml-4 h-10 w-10 text-emerald-600" />
              الأنشطة الرياضية
            </h2>
            <p className="text-xl text-gray-600">قوة الجسم وروح الفريق</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sportsActivities.map((activity) => (
              <Card key={activity.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="text-4xl">{activity.icon}</div>
                    <Badge className="bg-emerald-600">
                      {activity.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{activity.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{activity.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">المستوى:</span>
                      <span className="font-medium">{activity.level}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">الجدول:</span>
                      <span className="font-medium">{activity.schedule}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">المدرب:</span>
                      <span className="font-medium">{activity.trainer}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {activity.achievements.map((achievement, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        <Award className="w-3 h-3 ml-1" />
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 ml-1" />
                      {activity.participants} مشارك
                    </div>
                    <Button className="bg-emerald-600 hover:bg-emerald-700">
                      سجل الآن
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Activities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center">
              <Star className="ml-4 h-10 w-10 text-amber-600" />
              الأنشطة الثقافية
            </h2>
            <p className="text-xl text-gray-600">إثراء العقل وتنمية المواهب</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {culturalActivities.map((activity) => (
              <Card key={activity.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="text-4xl">{activity.icon}</div>
                    <Badge className="bg-amber-600">
                      {activity.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{activity.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{activity.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">المستوى:</span>
                      <span className="font-medium">{activity.level}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">الجدول:</span>
                      <span className="font-medium">{activity.schedule}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">المدرب:</span>
                      <span className="font-medium">{activity.trainer}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {activity.achievements.map((achievement, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        <Award className="w-3 h-3 ml-1" />
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 ml-1" />
                      {activity.participants} مشارك
                    </div>
                    <Button className="bg-amber-600 hover:bg-amber-700">
                      سجل الآن
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Activities;
