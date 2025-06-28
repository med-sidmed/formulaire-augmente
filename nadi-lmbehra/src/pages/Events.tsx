
import { Calendar, MapPin, Clock, Users, Trophy, Star, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "مباراة كرة القدم النهائية",
      description: "المباراة النهائية لبطولة النادي الداخلية لكرة القدم",
      date: "15 يناير 2025",
      time: "18:00",
      location: "الملعب الرئيسي",
      category: "رياضي",
      price: "مجاني",
      availableSeats: 150,
      totalSeats: 200,
      image: "⚽",
      organizer: "قسم كرة القدم",
      status: "متاح"
    },
    {
      id: 2,
      title: "أمسية شعرية",
      description: "أمسية شعرية بمشاركة شعراء محليين ومن أعضاء النادي",
      date: "20 يناير 2025",
      time: "19:30",
      location: "القاعة الثقافية",
      category: "ثقافي",
      price: "20 ريال",
      availableSeats: 45,
      totalSeats: 80,
      image: "📝",
      organizer: "القسم الثقافي",
      status: "متاح"
    },
    {
      id: 3,
      title: "معرض الخط العربي",
      description: "معرض لأعمال طلاب دورة الخط العربي مع ورش تفاعلية",
      date: "25 يناير 2025",  
      time: "16:00",
      location: "صالة المعارض",
      category: "ثقافي",
      price: "مجاني",
      availableSeats: 100,
      totalSeats: 120,
      image: "✍️",
      organizer: "قسم الخط العربي",
      status: "متاح"
    },
    {
      id: 4,
      title: "بطولة كرة السلة",
      description: "بطولة كرة السلة السنوية للأندية المحلية",
      date: "30 يناير 2025",
      time: "15:00",
      location: "صالة كرة السلة",
      category: "رياضي",
      price: "10 ريال",
      availableSeats: 0,
      totalSeats: 100,
      image: "🏀",
      organizer: "قسم كرة السلة",
      status: "مكتمل"
    },
    {
      id: 5,
      title: "عرض مسرحي - حكايات شعبية",
      description: "عرض مسرحي يجسد الحكايات الشعبية التراثية",
      date: "5 فبراير 2025",
      time: "20:00", 
      location: "المسرح الرئيسي",
      category: "ثقافي",
      price: "25 ريال",
      availableSeats: 80,
      totalSeats: 150,
      image: "🎭",
      organizer: "فرقة المسرح",
      status: "متاح"
    },
    {
      id: 6,
      title: "ورشة الفنون التشكيلية",
      description: "ورشة عملية في تقنيات الرسم الحديثة",
      date: "10 فبراير 2025",
      time: "14:00",
      location: "استوديو الفنون",
      category: "ثقافي",
      price: "30 ريال",
      availableSeats: 15,
      totalSeats: 20,
      image: "🎨",
      organizer: "قسم الفنون التشكيلية",
      status: "متاح"
    }
  ];

  const pastEvents = [
    {
      title: "معرض الصور السنوي",
      date: "ديسمبر 2024",
      participants: 200,
      success: "نجح بامتياز"
    },
    {
      title: "دوري كرة القدم الداخلي",
      date: "نوفمبر 2024", 
      participants: 64,
      success: "مشاركة واسعة"
    },
    {
      title: "مهرجان الثقافة والفنون",
      date: "أكتوبر 2024",
      participants: 350,
      success: "حضور مميز"
    }
  ];

  const sportsEvents = upcomingEvents.filter(event => event.category === "رياضي");
  const culturalEvents = upcomingEvents.filter(event => event.category === "ثقافي");

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-emerald-50" dir="rtl">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-900/10 to-amber-900/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">الفعاليات والأحداث</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            لا تفوت هذه الأحداث المميزة واحجز مكانك في فعالياتنا المتنوعة
          </p>
        </div>
      </section>

      {/* Sports Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center">
              <Trophy className="ml-4 h-10 w-10 text-emerald-600" />
              الفعاليات الرياضية
            </h2>
            <p className="text-xl text-gray-600">منافسات وبطولات رياضية</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sportsEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="text-4xl">{event.image}</div>
                    <div className="flex gap-2">
                      <Badge className="bg-emerald-600">{event.category}</Badge>
                      <Badge 
                        variant={event.status === "متاح" ? "default" : "destructive"}
                        className={event.status === "متاح" ? "bg-green-600" : ""}
                      >
                        {event.status}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{event.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-gray-500" />
                      <span>{event.availableSeats} متاح من {event.totalSeats}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <div className="text-lg font-bold text-emerald-600">
                      {event.price}
                    </div>
                    <Button 
                      className="bg-emerald-600 hover:bg-emerald-700"
                      disabled={event.status === "مكتمل"}
                    >
                      {event.status === "مكتمل" ? "مكتمل" : "احجز مكانك"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Events */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center">
              <Star className="ml-4 h-10 w-10 text-amber-600" />
              الفعاليات الثقافية
            </h2>
            <p className="text-xl text-gray-600">أمسيات ومعارض ثقافية</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {culturalEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="text-4xl">{event.image}</div>
                    <div className="flex gap-2">
                      <Badge className="bg-amber-600">{event.category}</Badge>
                      <Badge 
                        variant={event.status === "متاح" ? "default" : "destructive"}
                        className={event.status === "متاح" ? "bg-green-600" : ""}
                      >
                        {event.status}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{event.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-gray-500" />
                      <span>{event.availableSeats} متاح من {event.totalSeats}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <div className="text-lg font-bold text-amber-600">
                      {event.price}
                    </div>
                    <Button 
                      className="bg-amber-600 hover:bg-amber-700"
                      disabled={event.status === "مكتمل"}
                    >
                      {event.status === "مكتمل" ? "مكتمل" : "احجز مكانك"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center">
              <Award className="ml-4 h-10 w-10 text-purple-600" />
              فعاليات سابقة
            </h2>
            <p className="text-xl text-gray-600">إنجازاتنا الماضية</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-2">{event.date}</p>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Users className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{event.participants} مشارك</span>
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-700">
                    {event.success}
                  </Badge>
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

export default Events;
