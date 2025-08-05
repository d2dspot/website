import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "@/pages/admin/LoginPage.jsx";
import FileManagerPage from "@/pages/admin/FileManagerPage.jsx";
import DashboardPage from "@/pages/admin/DashboardPage.jsx";
import ClientsLogosPage from "@/pages/admin/ClientsLogosPage.jsx";
import WorksPage from "@/pages/admin/WorksPage.jsx";
import ServicesListPage from "@/pages/admin/ServicesListPage.jsx";
import TestimonialsPage from "@/pages/admin/TestimonialsPage.jsx";
import BlogsPage from "@/pages/admin/BlogsPage.jsx";
import ContactListPage from "@/pages/admin/ContactListPage.jsx";
import SchedulePage from "@/pages/admin/SchedulePage.jsx";
import CareersPage from "@/pages/admin/CareersPage.jsx";
import ContentEditorPage from "@/pages/admin/ContentEditorPage.jsx";

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
import FileFolderPage from "@/pages/admin/FileFolderPage";
import AboutPage from "@/pages/public/AboutPage";
import AcademyPage from "./pages/public/AcademyPage";

const App = () => {
  useScroll();

  return (
    <Router>
      <ToastContainer />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/academy" element={<AcademyPage />} />
        <Route
          path="/blogs"
          element={
            <CategoryProvider>
              <BlogPage />
            </CategoryProvider>
          }
        />
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
    </Router>
  );
};

export default App;
