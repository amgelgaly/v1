import { createBrowserRouter, RouteObject } from 'react-router-dom';
import IndexPage from '@/pages/home/Index';
import AboutPage from '@/pages/about/About';
import Login from '@/pages/auth/Login';
import Dashboard from '@/pages/orders/Dashboard';
import Profile from '@/pages/auth/Profile';
import Request from '@/pages/orders/Request';
import OrderSchedulePage from '@/pages/orders/order-schedule';
import ServiceDetailsPage from '@/pages/services-pages/service-details';
import ContentCreation from '@/pages/services-pages/content-creation';
import DigitalMarketing from '@/pages/services-pages/digital-marketing';
import Seo from '@/pages/services-pages/seo';
import SocialMedia from '@/pages/services-pages/social-media';
import ServicesPage from '@/pages/services-pages/Services';
import Courses from '@/pages/courses/Courses';
import CourseDetails from '@/pages/courses/CourseDetails';
import Blog from '@/pages/blog/Blog';
import BlogPost from '@/pages/blog/BlogPost';
import Contact from '@/pages/contact/Contact';
import Cart from './pages/cart/Cart';
import NotFound from '@/pages/error/NotFound';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import { createElement } from 'react';
import Layout from '@/components/layout/Layout';

const routes: RouteObject[] = [
  {
    element: createElement(Layout),
    children: [
      {
        path: "/",
        element: createElement(IndexPage),
      },
      {
        path: "/about",
        element: createElement(AboutPage),
      },
      {
        path: "/login",
        element: createElement(Login),
      },
      {
        path: '/',
        element: createElement(ProtectedRoute),
        children: [
          {
            path: "dashboard",
            element: createElement(Dashboard),
          },
          {
            path: "profile",
            element: createElement(Profile),
          },
          {
            path: "request",
            element: createElement(Request),
          },
          {
            path: "order-schedule",
            element: createElement(OrderSchedulePage),
          },
        ],
      },
      {
        path: "/services",
        element: createElement(ServicesPage),
        children: [
          {
            path: "content-creation",
            element: createElement(ContentCreation),
          },
          {
            path: "digital-marketing",
            element: createElement(DigitalMarketing),
          },
          {
            path: "seo",
            element: createElement(Seo),
          },
          {
            path: "social-media",
            element: createElement(SocialMedia),
          },
          {
            path: ":id",
            element: createElement(ServiceDetailsPage),
          },
        ],
      },
      {
        path: "/courses",
        element: createElement(Courses),
      },
      {
        path: "/courses/:id",
        element: createElement(CourseDetails),
      },
      {
        path: "/blog",
        element: createElement(Blog),
      },
      {
        path: "/blog/:id",
        element: createElement(BlogPost),
      },
      {
        path: "/contact",
        element: createElement(Contact),
      },
      {
        path: "/cart",
        element: createElement(Cart),
      },
    ]
  },
  {
    path: "*",
    element: createElement(NotFound),
  },

];

const router = createBrowserRouter(routes);

export default router;