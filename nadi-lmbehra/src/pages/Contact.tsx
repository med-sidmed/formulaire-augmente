
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "اتصل بنا",
      details: ["+966 11 234 5678", "+966 11 234 5679"],
      color: "text-emerald-600"
    },
    {
      icon: Mail,
      title: "راسلنا",
      details: ["info@culturalclub.sa", "admin@culturalclub.sa"],
      color: "text-blue-600"
    },
    {
      icon: MapPin,
      title: "موقعنا",
      details: ["شارع الملك فهد، الرياض", "المملكة العربية السعودية"],
      color: "text-purple-600" 
    },
    {
      icon: Clock,
      title: "ساعات العمل",
      details: ["السبت - الخميس: 8:00 - 22:00", "الجمعة: 14:00 - 22:00"],
      color: "text-amber-600"
    }
  ];

  const departments = [
    {
      name: "الإدارة العامة",
      phone: "+966 11 234 5678",
      email: "admin@culturalclub.sa",
      manager: "أحمد المحمد",
      icon: "👔"
    },
    {
      name: "القسم الرياضي", 
      phone: "+966 11 234 5680",
      email: "sports@culturalclub.sa",
      manager: "سعد العلي",
      icon: "⚽"
    },
    {
      name: "القسم الثقافي",
      phone: "+966 11 234 5681", 
      email: "culture@culturalclub.sa",
      manager: "فاطمة أحمد",
      icon: "🎨"
    },
    {
      name: "العضوية والتسجيل",
      phone: "+966 11 234 5682",
      email: "membership@culturalclub.sa", 
      manager: "محمد السعيد",
      icon: "📋"
    }
  ];

  const faqs = [
    {
      question: "كيف يمكنني التسجيل في النادي؟",
      answer: "يمكنك التسجيل من خلال زيارة النادي شخصياً أو ملء استمارة التسجيل الإلكترونية"
    },
    {
      question: "ما هي رسوم العضوية؟",
      answer: "رسوم العضوية السنوية 200 ريال للكبار و100 ريال للأطفال دون 16 سنة"
    },
    {
      question: "هل توجد خصومات للعائلات؟",
      answer: "نعم، نقدم خصم 20% للعائلات عند تسجيل أكثر من شخصين"
    },
    {
      question: "ما هي الأنشطة المتاحة للأطفال؟",
      answer: "لدينا أنشطة متنوعة للأطفال مثل السباحة، كرة القدم، الفنون والأنشطة الثقافية"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-emerald-50" dir="rtl">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-900/10 to-amber-900/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">تواصل معنا</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            نحن هنا للإجابة على استفساراتكم ومساعدتكم في الانضمام إلى عائلة النادي
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center`}>
                    <info.icon className={`h-8 w-8 ${info.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 mb-1">{detail}</p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Send className="ml-2 h-6 w-6 text-emerald-600" />
                  أرسل لنا رسالة
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">الاسم الأول</Label>
                    <Input id="firstName" placeholder="أدخل اسمك الأول" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">اسم العائلة</Label>
                    <Input id="lastName" placeholder="أدخل اسم العائلة" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">البريد الإلكتروني</Label>
                  <Input id="email" type="email" placeholder="example@email.com" />
                </div>
                
                <div>
                  <Label htmlFor="phone">رقم الهاتف</Label>
                  <Input id="phone" placeholder="+966 50 000 0000" />
                </div>
                
                <div>
                  <Label htmlFor="subject">الموضوع</Label>
                  <Input id="subject" placeholder="موضوع الرسالة" />
                </div>
                
                <div>
                  <Label htmlFor="message">الرسالة</Label>
                  <Textarea 
                    id="message" 
                    placeholder="اكتب رسالتك هنا..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  <Send className="ml-2 h-4 w-4" />
                  إرسال الرسالة
                </Button>
              </CardContent>
            </Card>

            {/* Map & Location */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="ml-2 h-6 w-6 text-purple-600" />
                    موقع النادي
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-gray-500 mx-auto mb-2" />
                      <p className="text-gray-600">خريطة تفاعلية</p>
                      <p className="text-sm text-gray-500">شارع الملك فهد، الرياض</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>العنوان:</strong> شارع الملك فهد، حي الملك فهد، الرياض 12345</p>
                    <p><strong>نقاط مرجعية:</strong> بالقرب من مجمع الملك فهد التجاري</p>
                    <p><strong>مواقف السيارات:</strong> متوفرة مجاناً للأعضاء</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">الأقسام والمسؤولين</h2>
            <p className="text-xl text-gray-600">تواصل مباشرة مع القسم المختص</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{dept.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{dept.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{dept.manager}</p>
                  <div className="space-y-1 text-xs text-gray-500">
                    <p>{dept.phone}</p>
                    <p>{dept.email}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center">
              <MessageCircle className="ml-4 h-10 w-10 text-blue-600" />
              الأسئلة الشائعة
            </h2>
            <p className="text-xl text-gray-600">إجابات على أكثر الأسئلة تكراراً</p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media & Newsletter */}
      <section className="py-16 bg-gradient-to-r from-emerald-800 to-amber-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">ابق على تواصل</h2>
              <p className="text-xl opacity-90 mb-6">
                تابعنا على وسائل التواصل الاجتماعي للحصول على آخر الأخبار والفعاليات
              </p>
              <div className="flex space-x-4 space-x-reverse">
                {[
                  { icon: '📱', name: 'واتساب' },
                  { icon: '📘', name: 'فيسبوك' },
                  { icon: '📷', name: 'انستغرام' },
                  { icon: '🐦', name: 'تويتر' }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <span className="text-xl">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
            
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">النشرة الإخبارية</h3>
                <p className="text-white/80 mb-4">اشترك ليصلك كل جديد</p>
                <div className="flex gap-2">
                  <Input 
                    placeholder="بريدك الإلكتروني"
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                  />
                  <Button className="bg-white text-emerald-800 hover:bg-gray-100">
                    اشتراك
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
