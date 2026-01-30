import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";

const LoginPage = React.lazy(() => import("@/pages/admin/LoginPage.jsx"));
const FileManagerPage = React.lazy(() => import("@/pages/admin/FileManagerPage.jsx"));
const DashboardPage = React.lazy(() => import("@/pages/admin/DashboardPage.jsx"));
const ClientsLogosPage = React.lazy(() => import("@/pages/admin/ClientsLogosPage.jsx"));
const WorksPage = React.lazy(() => import("@/pages/admin/WorksPage.jsx"));
const ServicesListPage = React.lazy(() => import("@/pages/admin/ServicesListPage.jsx"));
const TestimonialsPage = React.lazy(() => import("@/pages/admin/TestimonialsPage.jsx"));
const BlogsPage = React.lazy(() => import("@/pages/admin/BlogsPage.jsx"));
const ContactListPage = React.lazy(() => import("@/pages/admin/ContactListPage.jsx"));
const SchedulePage = React.lazy(() => import("@/pages/admin/SchedulePage.jsx"));
const CareersPage = React.lazy(() => import("@/pages/admin/CareersPage.jsx"));
const ContentEditorPage = React.lazy(() => import("@/pages/admin/ContentEditorPage.jsx"));
const FileFolderPage = React.lazy(() => import("@/pages/admin/FileFolderPage"));

import HomePage from "@/pages/public/HomePage";
import ContactPage from "@/pages/public/ContactPage";
import BlogPage from "@/pages/public/BlogPage";
import BlogDetailPage from "@/pages/public/BlogDetailPage";

import NotAuthorized from "@/pages/error/NotAuthorized";

import { ToastContainer } from "@/lib/Toast";
import useScroll from "@/hooks/useScroll";

import { CategoryProvider } from "@/context/CategoryContext";
import UserProvider from "@/context/userContext.jsx";
import PrivateRoute from "@/routes/PrivateRoute";
import AboutPage from "@/pages/public/AboutPage";
import AcademyPage from "./pages/public/AcademyPage";
import ScrollToTop from "./lib/ScrollToTop";

const App = () => {
  useScroll();

  return (
    <Router>
      <ScrollToTop />

      <ToastContainer />
      <React.Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/academy" element={<AcademyPage />} />
          <Route
            path="/blog"
            element={
              <CategoryProvider>
                <BlogPage />
              </CategoryProvider>
            }
          />
          <Route path="/blogs" element={<Navigate to="/blog" replace />} />
          <Route
            path="/blog/:id"
            element={
              <CategoryProvider>
                <BlogDetailPage />
              </CategoryProvider>
            }
          />

          {/* Admin routes */}
          <Route
            path="/admin"
            element={
              <UserProvider>
                <PrivateRoute allowedRoles={["admin", "super-admin"]} />
              </UserProvider>
            }
          >
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="file-manager" element={<FileManagerPage />} />
            <Route path="file-folder/:folderId" element={<FileFolderPage />} />

            <Route path="clients-logos" element={<ClientsLogosPage />} />
            <Route path="works" element={<WorksPage />} />
            <Route path="services-list" element={<ServicesListPage />} />
            <Route path="testimonials" element={<TestimonialsPage />} />
            <Route path="blogs" element={<BlogsPage />} />
            <Route path="contact-list" element={<ContactListPage />} />
            <Route path="schedule" element={<SchedulePage />} />
            <Route path="careers" element={<CareersPage />} />
            <Route path="editor" element={<ContentEditorPage />} />
          </Route>
          {/* Login and fallback */}
          <Route
            path="/admin/login"
            element={
              <UserProvider>
                <LoginPage />
              </UserProvider>
            }
          />
          <Route path="/unauthorized" element={<NotAuthorized />} />
        </Routes>
      </React.Suspense>
      <SpeedInsights />
    </Router>
  );
};

export default App;
