import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, Clock, Award, Users } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import { useCart } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';

const Courses = () => {
  const { addItemToCart } = useCart();
  const language = document.documentElement.dir === 'rtl' ? 'ar' : 'en';

    const courses = [
        {
            id: 1,
            title: "Digital Marketing Fundamentals",
            description: "Learn the basics of digital marketing and how to build a successful marketing strategy.",
            duration: "8 Weeks",
            level: "Beginner",
            students: 120,
            price: 50,
            image: "/course-digital-marketing.jpg",
            topics: [
                "Introduction to Digital Marketing",
                "Market and Competitor Analysis",
                "Content Marketing",
                "Social Media Marketing",
                "Search Engine Optimization (SEO)",
                "Paid Advertising (PPC)",
                "Email Marketing",
                "Analytics and Reporting",
            ],
        },
        {
            id: 2,
            title: "Content Creation and Marketing",
            description: "Master the art of creating engaging content and promoting it effectively.",
            duration: "6 Weeks",
            level: "Intermediate",
            students: 80,
            price: 75,
            image: "/course-content-creation.jpg",
            topics: [
      ...               "التحسين خارج الصفحة",
                "تحسين محركات البحث التقني",
                "بناء الروابط",
                "تحليلات تحسين محركات البحث",
                "أدوات تحسين محركات البحث",
            ],
        },
    ];

  return (
    <>
      <PageHeader title={language === 'en' ? 'Explore our wide range of courses' : 'استكشف مجموعتنا الواسعة من الكورسات'} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {courses.map((course) => (
          <Link to={`/courses`} key={course.id}>
            <Card className="hover:shadow-lg transition-shadow duration-200">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover rounded-t-md" />
              <div>
              <CardHeader>
                <CardTitle>{language === "en" ? course.title : course.title}</CardTitle>
                <CardDescription>{language === "en" ? course.description : course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center mb-2">
                  <PlayCircle className="mr-2 h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center mb-2">
                  <Clock className="mr-2 h-4 w-4" />
                  <span>{course.level}</span>
                </div>
                <div className="flex items-center mb-2">
                  <Award className="mr-2 h-4 w-4" />
                  <span>{course.students} {language === 'en' ? 'Students' : 'طالب'}</span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-2 h-4 w-4" />
                  <Badge variant="outline">{course.price} {language === 'en' ? 'EGP' : 'ج.م'}</Badge>
                </div>
                <Button className="mt-4 w-full" onClick={(e) => { e.preventDefault(); e.stopPropagation(); addItemToCart({ ...course, name: course.title, quantity: 1, id: course.id.toString() }); }}>
                  {language === 'en' ? 'Add to Cart' : 'أضف إلى السلة'}
                </Button>
              </CardContent>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Courses;
