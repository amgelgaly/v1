import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, Clock, Award, Users } from "lucide-react";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import { courses } from './Courses'; // Assuming courses data is in Courses.tsx

const CourseDetailPage = () => {
  const { id } = useParams();
  // const courses = CoursesData.courses; // No need for CoursesData.

  const course = courses.find((c) => c.id === Number(id));

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="min-h-screen bg-background pt-16">
      <PageHeader
        title={course.title}
        subtitle={course.description}
      />
      <div className="container px-4 py-8">
        <Link to="/courses">
          <Button variant="outline" className="mb-4">
            الرجوع إلى الدورات
          </Button>
        </Link>
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-2xl mb-2">{course.title}</CardTitle>
            <CardDescription>{course.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative h-64 overflow-hidden rounded-t-lg">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4 mb-6 mt-6">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm">{course.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-sm">{course.level}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm">{course.students} طالب</span>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold mb-2">المواضيع الرئيسية:</h4>
              <ul className="space-y-1">
                {course.topics.map((topic, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <PlayCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
              سجل الآن
            </Button>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default CourseDetailPage;