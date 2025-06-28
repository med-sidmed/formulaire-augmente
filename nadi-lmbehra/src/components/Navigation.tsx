
import { Trophy } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { path: '/', label: 'الرئيسية' },
    { path: '/about', label: 'عن النادي' },
    { path: '/activities', label: 'الأنشطة' },
    { path: '/membership', label: 'العضوية' },
    { path: '/news', label: 'الأخبار' },
    { path: '/events', label: 'الفعاليات' },
    { path: '/gallery', label: 'المعرض' },
    { path: '/contact', label: 'اتصل بنا' }
  ];

  return (
    <header className="bg-gradient-to-r from-emerald-800 to-amber-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-4 space-x-reverse">
            <div className="bg-white/20 p-3 rounded-full">
              <Trophy className="h-8 w-8 text-amber-200" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">النادي الثقافي الرياضي</h1>
              <p className="text-amber-200">مكان الإبداع والتميز</p>
            </div>
          </Link>
          <nav className="hidden md:flex space-x-6 space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`hover:text-amber-200 transition-colors px-3 py-2 rounded-md ${
                  currentPath === item.path 
                    ? 'bg-white/20 text-amber-200' 
                    : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
