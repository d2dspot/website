// apiPaths.js - Microservices API Paths Configuration for Frontend Integration




// Base URL for API services
export const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

// Individual service URLs for microservices architecture based on .env port configurations
export const SERVICE_URLS = {
  AUTH: import.meta.env.VITE_AUTH_URL || "http://localhost:3001",
  FILE_MANAGER: import.meta.env.VITE_FILE_MANAGER_URL || "http://localhost:3002",
  WORK_SHOWCASE: import.meta.env.VITE_WORK_SHOWCASE_URL || "http://localhost:3005",
  SERVICE_SHOWCASE: import.meta.env.VITE_SERVICE_SHOWCASE_URL || "http://localhost:3006",
  TESTIMONIALS: import.meta.env.VITE_TESTIMONIALS_URL || "http://localhost:3007",
  BLOG: import.meta.env.VITE_BLOG_URL || "http://localhost:3008",
  CONTACT: import.meta.env.VITE_CONTACT_URL || "http://localhost:3009",
  COURSE_CARD: import.meta.env.VITE_COURSE_CARD_URL || "http://localhost:3010",
  SCHEDULER: import.meta.env.VITE_SCHEDULER_URL || "http://localhost:3011",
  CAREER: import.meta.env.VITE_CAREER_URL || "http://localhost:3012",
  CLIENTS_LOGO: import.meta.env.VITE_CLIENTS_LOGO_URL || "http://localhost:3004",
};


export const API_PATHS = {
  // Health Check & System Status
  HEALTH: {
    GLOBAL_HEALTH: "/health", // Global health check for all services
    SERVICE_STATUS: "/status", // Individual service status
  },

  // Authentication Service (PORT 3001)
  AUTH: {
    // Public endpoints
    ROOT: "/", // Root endpoint (service health check)
    REGISTER: "/api/auth/register", // Register a new user
    LOGIN: "/api/auth/login", // Authenticate user & return JWT token
    LOGOUT: "/api/auth/logout", // Logout user
    REFRESH_TOKEN: "/api/auth/refresh", // Refresh JWT token
    FORGOT_PASSWORD: "/api/auth/forgot-password", // Request password reset
    RESET_PASSWORD: "/api/auth/reset-password", // Reset password with token
    VERIFY_EMAIL: "/api/auth/verify-email", // Verify email address

    // Protected endpoints (requires authentication)
    GET_PROFILE: "/api/auth/profile", // Get logged-in user profile
    UPDATE_PROFILE: "/api/auth/profile", // Update user profile
    CHANGE_PASSWORD: "/api/auth/change-password", // Change user password
    DELETE_ACCOUNT: "/api/auth/delete-account", // Delete user account

    // Admin management
    ADMIN_REGISTER: "/api/auth/admin/register", // Register new admin
    GET_ADMINS: "/api/auth/admins", // Get all admins
    GET_ADMIN_BY_ID: (adminId) => `/api/auth/admins/${adminId}`, // Get specific admin
    UPDATE_ADMIN: (adminId) => `/api/auth/admins/${adminId}`, // Update admin
    DELETE_ADMIN: (adminId) => `/api/auth/admins/${adminId}`, // Delete admin

    // Role management
    GET_ROLES: "/api/auth/roles", // Get all available roles
    CREATE_ROLE: "/api/auth/roles", // Create new role
    UPDATE_ROLE: (roleId) => `/api/auth/roles/${roleId}`, // Update role
    DELETE_ROLE: (roleId) => `/api/auth/roles/${roleId}`, // Delete role
    GET_ROLE_PERMISSIONS: (roleId) => `/api/auth/roles/${roleId}/permissions`, // Get role permissions
    UPDATE_ROLE_PERMISSIONS: (roleId) =>
      `/api/auth/roles/${roleId}/permissions`, // Update role permissions
  },

  // File Manager Service (PORT 3002)
  FILE_MANAGER: {
    ROOT: "/", // Root endpoint (service health check)
    UPLOAD_FILE: "/api/files/upload", // Upload file
    GET_ALL_FILES: "/api/files", // Get all files
    GET_FILE_BY_ID: (fileId) => `/api/files/${fileId}`, // Get file by ID
    UPDATE_FILE: (fileId) => `/api/files/${fileId}`, // Update file metadata
    DELETE_FILE: (fileId) => `/api/files/${fileId}`, // Delete file
    GET_FILE_BY_PATH: "/api/files/path", // Get file by path
    GENERATE_PRESIGNED_URL: "/api/files/presigned-url", // Generate presigned URL for direct upload
    DOWNLOAD_FILE: (fileId) => `/api/files/${fileId}/download`, // Download file

    // Folder operations
    GET_ALL_FOLDERS: "/api/folders", // Get all folders
    CREATE_FOLDER: "/api/folders", // Create new folder
    GET_FOLDER_BY_ID: (folderId) => `/api/folders/${folderId}`, // Get folder by ID
    UPDATE_FOLDER: (folderId) => `/api/folders/${folderId}`, // Update folder
    DELETE_FOLDER: (folderId) => `/api/folders/${folderId}`, // Delete folder
    GET_FOLDER_CONTENTS: (folderId) => `/api/folders/${folderId}/contents`, // Get folder contents

    // Public access to uploaded files
    PUBLIC_FILE: (fileName) => `/public/${fileName}`, // Public access to files
  },

  // Clients Logo Service (PORT 3004)
  CLIENTS_LOGO: {
    ROOT: "/", // Root endpoint (service health check)
    GET_ALL_LOGOS: "/api/clients", // Get all client logos
    GET_LOGO_BY_ID: (logoId) => `/api/clients/${logoId}`, // Get logo by ID
    CREATE_LOGO: "/api/clients", // Create new client logo
    UPDATE_LOGO: (logoId) => `/api/clients/${logoId}`, // Update client logo
    DELETE_LOGO: (logoId) => `/api/clients/${logoId}`, // Delete client logo
    GET_FEATURED_LOGOS: "/api/clients/featured", // Get featured client logos
    GET_LOGO_CATEGORIES: "/api/clients/categories", // Get logo categories
  },

  // Work Showcase Service (PORT 3005)
  WORK_SHOWCASE: {
    ROOT: "/", // Root endpoint (service health check)
    GET_ALL_PROJECTS: "/api/portfolio", // Get all portfolio projects
    GET_PROJECT_BY_ID: (projectId) => `/api/portfolio/${projectId}`, // Get project by ID
    GET_PROJECT_BY_SLUG: (slug) => `/api/portfolio/slug/${slug}`, // Get project by slug
    CREATE_PROJECT: "/api/portfolio", // Create new portfolio project
    UPDATE_PROJECT: (projectId) => `/api/portfolio/${projectId}`, // Update portfolio project
    DELETE_PROJECT: (projectId) => `/api/portfolio/${projectId}`, // Delete portfolio project
    GET_PROJECT_CATEGORIES: "/api/portfolio/categories", // Get project categories
    GET_PROJECT_TAGS: "/api/portfolio/tags", // Get project tags
    GET_FEATURED_PROJECTS: "/api/portfolio/featured", // Get featured projects
  },

  // Service Showcase Service (PORT 3006)
  SERVICE_SHOWCASE: {
    ROOT: "/", // Root endpoint (service health check)
    GET_ALL_SERVICES: "/api/services", // Get all services
    GET_SERVICE_BY_ID: (serviceId) => `/api/services/${serviceId}`, // Get service by ID
    GET_SERVICE_BY_SLUG: (slug) => `/api/services/slug/${slug}`, // Get service by slug
    CREATE_SERVICE: "/api/services", // Create new service
    UPDATE_SERVICE: (serviceId) => `/api/services/${serviceId}`, // Update service
    DELETE_SERVICE: (serviceId) => `/api/services/${serviceId}`, // Delete service
    GET_SERVICE_CATEGORIES: "/api/services/categories", // Get service categories
    GET_SERVICE_TAGS: "/api/services/tags", // Get service tags
    GET_FEATURED_SERVICES: "/api/services/featured", // Get featured services
  },

  // Testimonials Service (PORT 3007)
  TESTIMONIALS: {
    ROOT: "/", // Root endpoint (service health check)
    GET_ALL_TESTIMONIALS: "/api/testimonials", // Get all testimonials
    GET_TESTIMONIAL_BY_ID: (testimonialId) =>
      `/api/testimonials/${testimonialId}`, // Get testimonial by ID
    CREATE_TESTIMONIAL: "/api/testimonials", // Create new testimonial
    UPDATE_TESTIMONIAL: (testimonialId) => `/api/testimonials/${testimonialId}`, // Update testimonial
    DELETE_TESTIMONIAL: (testimonialId) => `/api/testimonials/${testimonialId}`, // Delete testimonial
    GET_APPROVED_TESTIMONIALS: "/api/testimonials/approved", // Get approved testimonials
    GET_PENDING_TESTIMONIALS: "/api/testimonials/pending", // Get pending testimonials
    APPROVE_TESTIMONIAL: (testimonialId) =>
      `/api/testimonials/${testimonialId}/approve`, // Approve testimonial
    REJECT_TESTIMONIAL: (testimonialId) =>
      `/api/testimonials/${testimonialId}/reject`, // Reject testimonial
    GET_FEATURED_TESTIMONIALS: "/api/testimonials/featured", // Get featured testimonials
  },

  // Blog Service (PORT 3008)
  BLOG: {
    ROOT: "/", // Root endpoint (service health check)
    GET_ALL_POSTS: "/api/blog/posts", // Get all blog posts
    GET_POST_BY_ID: (postId) => `/api/blog/posts/${postId}`, // Get post by ID
    GET_POST_BY_SLUG: (slug) => `/api/blog/posts/slug/${slug}`, // Get post by slug
    CREATE_POST: "/api/blog/posts", // Create new blog post
    UPDATE_POST: (postId) => `/api/blog/posts/${postId}`, // Update blog post
    DELETE_POST: (postId) => `/api/blog/posts/${postId}`, // Delete blog post
    GET_CATEGORIES: "/api/blog/categories", // Get blog categories
    GET_TAGS: "/api/blog/tags", // Get blog tags
    SEARCH_POSTS: "/api/blog/search", // Search blog posts
    GET_FEATURED_POSTS: "/api/blog/featured", // Get featured posts
    GET_RECENT_POSTS: "/api/blog/recent", // Get recent posts
    PUBLISH_POST: (postId) => `/api/blog/posts/${postId}/publish`, // Publish post
    UNPUBLISH_POST: (postId) => `/api/blog/posts/${postId}/unpublish`, // Unpublish post
    GET_POST_COMMENTS: (postId) => `/api/blog/posts/${postId}/comments`, // Get post comments
    ADD_COMMENT: (postId) => `/api/blog/posts/${postId}/comments`, // Add comment to post
  },

  // Contact Service (PORT 3009)
  CONTACT: {
    ROOT: "/", // Root endpoint (service health check)
    SEND_MESSAGE: "/api/contact", // Send contact message
    GET_ALL_MESSAGES: "/api/contact/messages", // Get all contact messages
    GET_MESSAGE_BY_ID: (messageId) => `/api/contact/messages/${messageId}`, // Get message by ID
    UPDATE_MESSAGE_STATUS: (messageId) =>
      `/api/contact/messages/${messageId}/status`, // Update message status
    DELETE_MESSAGE: (messageId) => `/api/contact/messages/${messageId}`, // Delete message
    GET_CONTACT_FORM_CONFIG: "/api/contact/config", // Get contact form configuration
    UPDATE_CONTACT_FORM_CONFIG: "/api/contact/config", // Update contact form configuration
  },

  // Course Card Service (PORT 3010)
  COURSE_CARD: {
    ROOT: "/", // Root endpoint (service health check)
    GET_ALL_COURSES: "/api/courses", // Get all courses
    GET_COURSE_BY_ID: (courseId) => `/api/courses/${courseId}`, // Get course by ID
    GET_COURSE_BY_SLUG: (slug) => `/api/courses/slug/${slug}`, // Get course by slug
    CREATE_COURSE: "/api/courses", // Create new course
    UPDATE_COURSE: (courseId) => `/api/courses/${courseId}`, // Update course details
    DELETE_COURSE: (courseId) => `/api/courses/${courseId}`, // Delete course
    GET_FEATURED_COURSES: "/api/courses/featured", // Get featured courses
    GET_COURSE_CATEGORIES: "/api/courses/categories", // Get course categories
    GET_COURSE_TAGS: "/api/courses/tags", // Get course tags
  },

  // Scheduler Service (PORT 3011)
  SCHEDULER: {
    ROOT: "/", // Root endpoint (service health check)
    GET_SCHEDULE: "/api/scheduler", // Get schedule
    GET_AVAILABILITY: "/api/scheduler/availability", // Check availability
    CREATE_APPOINTMENT: "/api/scheduler/appointments", // Create new appointment
    UPDATE_APPOINTMENT: (appointmentId) =>
      `/api/scheduler/appointments/${appointmentId}`, // Update appointment
    DELETE_APPOINTMENT: (appointmentId) =>
      `/api/scheduler/appointments/${appointmentId}`, // Delete appointment
    GET_APPOINTMENT_BY_ID: (appointmentId) =>
      `/api/scheduler/appointments/${appointmentId}`, // Get appointment
    GET_USER_APPOINTMENTS: "/api/scheduler/appointments/user", // Get user appointments
    GET_CALENDAR_EVENTS: "/api/scheduler/calendar", // Get calendar events
    CONFIRM_APPOINTMENT: (appointmentId) =>
      `/api/scheduler/appointments/${appointmentId}/confirm`, // Confirm appointment
    CANCEL_APPOINTMENT: (appointmentId) =>
      `/api/scheduler/appointments/${appointmentId}/cancel`, // Cancel appointment
    RESCHEDULE_APPOINTMENT: (appointmentId) =>
      `/api/scheduler/appointments/${appointmentId}/reschedule`, // Reschedule appointment
    GET_TIME_SLOTS: "/api/scheduler/timeslots", // Get available time slots
  },

  // Career Service (PORT 3012)
  CAREER: {
    ROOT: "/", // Root endpoint (service health check)
    GET_ALL_JOBS: "/api/careers/jobs", // Get all job listings
    GET_JOB_BY_ID: (jobId) => `/api/careers/jobs/${jobId}`, // Get job by ID
    GET_JOB_BY_SLUG: (slug) => `/api/careers/jobs/slug/${slug}`, // Get job by slug
    CREATE_JOB: "/api/careers/jobs", // Create new job
    UPDATE_JOB: (jobId) => `/api/careers/jobs/${jobId}`, // Update job details
    DELETE_JOB: (jobId) => `/api/careers/jobs/${jobId}`, // Delete job
    GET_ACTIVE_JOBS: "/api/careers/jobs/active", // Get active job listings
    GET_FEATURED_JOBS: "/api/careers/jobs/featured", // Get featured jobs
    GET_JOB_CATEGORIES: "/api/careers/categories", // Get job categories
    GET_JOB_LOCATIONS: "/api/careers/locations", // Get job locations
    APPLY_FOR_JOB: (jobId) => `/api/careers/jobs/${jobId}/apply`, // Apply for job
    GET_APPLICATIONS: "/api/careers/applications", // Get job applications
    GET_APPLICATION_BY_ID: (applicationId) =>
      `/api/careers/applications/${applicationId}`, // Get application by ID
    UPDATE_APPLICATION_STATUS: (applicationId) =>
      `/api/careers/applications/${applicationId}/status`, // Update application status
  },
};

// Helper function to build full URL for microservices
export const buildServiceUrl = (serviceName, endpoint) => {
  const baseUrl = SERVICE_URLS[serviceName];
  if (!baseUrl) {
    console.error(`Unknown service: ${serviceName}`);
    return null;
  }
  return `${baseUrl}${endpoint}`;
};

// Helper function to build URL with query parameters
export const buildUrlWithParams = (url, params) => {
  if (!params || Object.keys(params).length === 0) return url;

  const queryString = Object.entries(params)
    .filter(([_, value]) => value !== undefined && value !== null)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");

  return `${url}${url.includes("?") ? "&" : "?"}${queryString}`;
};

// Helper function to build complete API URL with path and parameters
export const buildApiUrl = (serviceName, path, params = null) => {
  const url = buildServiceUrl(serviceName, path);
  return params ? buildUrlWithParams(url, params) : url;
};

// Example usage for frontend:
//
// import { API_PATHS, buildApiUrl } from './apiPaths.js';
//
// // Get all blog posts
// const fetchBlogPosts = async () => {
//   try {
//     const response = await fetch(
//       buildApiUrl('BLOG', API_PATHS.BLOG.GET_ALL_POSTS, { page: 1, limit: 10 })
//     );
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error fetching blog posts:', error);
//     return null;
//   }
// };
//
// // Login user
// const loginUser = async (email, password) => {
//   try {
//     const response = await fetch(buildApiUrl('AUTH', API_PATHS.AUTH.LOGIN), {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email, password })
//     });
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error logging in:', error);
//     return null;
//   }
// };

// Export default configuration
export default {
  BASE_URL,
  SERVICE_URLS,
  API_PATHS,
  buildServiceUrl,
  buildUrlWithParams,
  buildApiUrl,
};
