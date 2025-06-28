
import { useState } from 'react';
import { Image, Play, Calendar, Eye, Heart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('all');

  const galleryItems = [
    {
      id: 1,
      title: "بطولة كرة القدم 2024",
      category: "رياضي",
      type: "image",
      thumbnail: "⚽",
      date: "ديسمبر 2024",
      views: 245,
      likes: 18,
      description: "لحظات مثيرة من البطولة السنوية لكرة القدم"
    },
    {
      id: 2,
      title: "معرض الخط العربي",
      category: "ثقافي",
      type: "image",
      thumbnail: "✍️",
      date: "نوفمبر 2024",
      views: 189,
      likes: 24,
      description: "أعمال فنية رائعة من طلاب دورة الخط العربي"
    },
    {
      id: 3,
      title: "عرض مسرحي - التراث",
      category: "ثقافي", 
      type: "video",
      thumbnail: "🎭",
      date: "أكتوبر 2024",
      views: 156,
      likes: 31,
      description: "عرض مسرحي يجسد التراث الشعبي المحلي"
    },
    {
      id: 4,
      title: "بطولة كرة السلة",
      category: "رياضي",
      type: "image",
      thumbnail: "🏀",
      date: "سبتمبر 2024",
      views: 198,
      likes: 22,
      description: "منافسات قوية في بطولة كرة السلة"
    },
    {
      id: 5,
      title: "ورشة الفنون التشكيلية",
      category: "ثقافي",
      type: "image", 
      thumbnail: "🎨",
      date: "أغسطس 2024",
      views: 143,
      likes: 19,
      description: "إبداعات فنية من ورشة الفنون التشكيلية"
    },
    {
      id: 6,
      title: "دورة السباحة للناشئين",
      category: "رياضي",
      type: "video",
      thumbnail: "🏊",
      date: "يوليو 2024",
      views: 267,
      likes: 33,
      description: "تدريبات السباحة للأطفال والناشئين"
    },
    {
      id: 7,
      title: "أمسية شعرية",
      category: "ثقافي",
      type: "video",
      thumbnail: "📝",
      date: "يونيو 2024",
      views: 234,
      likes: 28,
      description: "أمسية شعرية بمشاركة شعراء محليين"
    },
    {
      id: 8,
      title: "مباراة كرة القدم النهائية",
      category: "رياضي",
      type: "image",
      thumbnail: "⚽",
      date: "مايو 2024",
      views: 389,
      likes: 42,
      description: "المباراة النهائية المثيرة لبطولة النادي"
    },
    {
      id: 9,
      title: "معرض الأعمال الفنية",
      category: "ثقافي",
      type: "image",
      thumbnail: "🖼️",
      date: "أبريل 2024",
      views: 176,
      likes: 25,
      description: "معرض للوحات والأعمال الفنية لأعضاء النادي"
    },
    {
      id: 10,
      title: "تدريبات الجمباز",
      category: "رياضي",
      type: "video",
      thumbnail: "🤸",
      date: "مارس 2024",
      views: 198,
      likes: 21,
      description: "تدريبات الجمباز للمبتدئين والمتقدمين"
    },
    {
      id: 11,
      title: "ورشة الموسيقى التراثية",
      category: "ثقافي",
      type: "video",
      thumbnail: "🎵",
      date: "فبراير 2024",
      views: 145,
      likes: 17,
      description: "تعلم آلات الموسيقى التراثية"
    },
    {
      id: 12,
      title: "مسابقة الجري",
      category: "رياضي",
      type: "image",
      thumbnail: "🏃",
      date: "يناير 2024",
      views: 213,
      likes: 29,
      description: "مسابقة الجري السنوية للنادي"
    }
  ];

  const filteredItems = activeTab === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  const stats = {
    total: galleryItems.length,
    sports: galleryItems.filter(item => item.category === 'رياضي').length,
    cultural: galleryItems.filter(item => item.category === 'ثقافي').length,
    videos: galleryItems.filter(item => item.type === 'video').length
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-emerald-50" dir="rtl">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-900/10 to-amber-900/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">معرض الصور والفيديوهات</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            استعرض لحظاتنا المميزة وذكرياتنا الجميلة من جميع الأنشطة والفعاليات
          </p>
          
          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <div className="text-2xl font-bold text-gray-800">{stats.total}</div>
              <div className="text-sm text-gray-600">إجمالي المحتوى</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <div className="text-2xl font-bold text-emerald-600">{stats.sports}</div>
              <div className="text-sm text-gray-600">رياضي</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <div className="text-2xl font-bold text-amber-600">{stats.cultural}</div>
              <div className="text-sm text-gray-600">ثقافي</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <div className="text-2xl font-bold text-purple-600">{stats.videos}</div>
              <div className="text-sm text-gray-600">فيديو</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-2 space-x-reverse">
            <Button
              variant={activeTab === 'all' ? 'default' : 'outline'}
              onClick={() => setActiveTab('all')}
              className={activeTab === 'all' ? 'bg-gray-800' : ''}
            >
              <Image className="w-4 h-4 ml-2" />
              الكل ({stats.total})
            </Button>
            <Button
              variant={activeTab === 'رياضي' ? 'default' : 'outline'}
              onClick={() => setActiveTab('رياضي')}
              className={activeTab === 'رياضي' ? 'bg-emerald-600' : ''}
            >
              ⚽ رياضي ({stats.sports})
            </Button>
            <Button
              variant={activeTab === 'ثقافي' ? 'default' : 'outline'}
              onClick={() => setActiveTab('ثقافي')}
              className={activeTab === 'ثقافي' ? 'bg-amber-600' : ''}
            >
              🎨 ثقافي ({stats.cultural})
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-6xl">
                    {item.thumbnail}
                    {item.type === 'video' && (
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play className="w-12 h-12 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="absolute top-2 right-2 flex gap-2">
                    <Badge 
                      className={item.category === 'رياضي' ? 'bg-emerald-600' : 'bg-amber-600'}
                    >
                      {item.category}
                    </Badge>
                    {item.type === 'video' && (
                      <Badge variant="secondary">
                        <Play className="w-3 h-3 ml-1" />
                        فيديو
                      </Badge>
                    )}
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {item.views}
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-3 h-3" />
                        {item.likes}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Button size="sm" variant="outline" className="text-xs">
                      عرض
                    </Button>
                    <Button size="sm" variant="ghost" className="text-xs">
                      <Share2 className="w-3 h-3 ml-1" />
                      مشاركة
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📷</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">لا توجد عناصر</h3>
              <p className="text-gray-600">لم نجد أي محتوى في هذه الفئة</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-emerald-800 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">شارك معنا لحظاتك المميزة</h2>
          <p className="text-xl opacity-90 mb-8">
            إذا كان لديك صور أو فيديوهات من أنشطة النادي، شاركها معنا
          </p>
          <Button size="lg" className="bg-white text-emerald-800 hover:bg-gray-100">
            ارسل مساهمتك
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
