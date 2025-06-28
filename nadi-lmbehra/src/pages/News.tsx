
import { Calendar, User, Eye } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: "فوز فريق النادي بكأس البطولة الإقليمية",
      excerpt: "حقق فريق كرة القدم في نادينا إنجازاً مميزاً بالفوز بكأس البطولة الإقليمية في مباراة مثيرة أمس",
      date: "2024-01-15",
      author: "محرر الأخبار",
      category: "رياضة",
      views: 1250,
      image: "🏆"
    },
    {
      id: 2,
      title: "افتتاح دورة جديدة في تعليم الخط العربي",
      excerpt: "ننوه أعضاءنا الكرام بافتتاح دورة تدريبية متقدمة في فن الخط العربي تحت إشراف الأستاذ المتميز",
      date: "2024-01-12",
      author: "قسم الأنشطة الثقافية",
      category: "ثقافة",
      views: 890,
      image: "✍️"
    },
    {
      id: 3,
      title: "عرض مسرحي جديد يوم الجمعة القادم",
      excerpt: "يسعدنا دعوتكم لحضور العرض المسرحي الجديد 'أحلام الشباب' الذي سيقدمه فريق المسرح",
      date: "2024-01-10",
      author: "فريق المسرح",
      category: "فنون",
      views: 654,
      image: "🎭"
    },
    {
      id: 4,
      title: "تدريبات كرة القدم للناشئين كل أربعاء",
      excerpt: "نعلن عن بدء برنامج تدريبي مخصص للناشئين في كرة القدم كل يوم أربعاء من الساعة الرابعة عصراً",
      date: "2024-01-08",
      author: "المدرب الرياضي",
      category: "رياضة",
      views: 432,
      image: "⚽"
    },
    {
      id: 5,
      title: "معرض للوحات الفنية من إبداع أعضاء النادي",
      excerpt: "افتتح أمس معرض فني يضم مجموعة رائعة من اللوحات الفنية التي أبدعها أعضاء النادي الموهوبون",
      date: "2024-01-05",
      author: "قسم الفنون",
      category: "فنون",
      views: 789,
      image: "🎨"
    },
    {
      id: 6,
      title: "ورشة تدريبية في التصوير الفوتوغرافي",
      excerpt: "ندعوكم للمشاركة في ورشة التصوير الفوتوغرافي التي ستقام نهاية الأسبوع مع المصور المحترف",
      date: "2024-01-03",
      author: "قسم التدريب",
      category: "تدريب",
      views: 567,
      image: "📸"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'رياضة':
        return 'bg-emerald-100 text-emerald-800';
      case 'ثقافة':
        return 'bg-amber-100 text-amber-800';
      case 'فنون':
        return 'bg-purple-100 text-purple-800';
      case 'تدريب':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-emerald-50" dir="rtl">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-900/10 to-amber-900/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">الأخبار</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            آخر أخبار النادي وأنشطته ومستجداته
          </p>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">الخبر الرئيسي</h2>
            <div className="bg-gradient-to-r from-emerald-600 to-amber-600 p-8 rounded-lg text-white">
              <div className="flex items-center mb-4">
                <div className="text-6xl ml-6">{newsArticles[0].image}</div>
                <div>
                  <Badge className="bg-white text-emerald-600 mb-2">
                    {newsArticles[0].category}
                  </Badge>
                  <h3 className="text-3xl font-bold mb-2">{newsArticles[0].title}</h3>
                  <p className="text-lg opacity-90">{newsArticles[0].excerpt}</p>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm opacity-80">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 ml-1" />
                    {newsArticles[0].date}
                  </span>
                  <span className="flex items-center">
                    <User className="w-4 h-4 ml-1" />
                    {newsArticles[0].author}
                  </span>
                </div>
                <span className="flex items-center">
                  <Eye className="w-4 h-4 ml-1" />
                  {newsArticles[0].views} مشاهدة
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">آخر الأخبار</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.slice(1).map((article) => (
              <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={getCategoryColor(article.category)}>
                      {article.category}
                    </Badge>
                    <div className="text-4xl">{article.image}</div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 ml-1" />
                        {article.date}
                      </span>
                      <span className="flex items-center">
                        <Eye className="w-4 h-4 ml-1" />
                        {article.views}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">اشترك في نشرتنا الإخبارية</h2>
            <p className="text-xl text-gray-600 mb-8">
              احصل على آخر الأخبار والتحديثات مباشرة في بريدك الإلكتروني
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors">
                اشترك
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
