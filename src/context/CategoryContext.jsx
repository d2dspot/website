// CategoryContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a context to hold the selected category
const CategoryContext = createContext();

// Custom hook to use the CategoryContext
export const useCategory = () => {
  return useContext(CategoryContext);
};

// Provider component to wrap around the app and provide the category context
export const CategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const categoryFromHash = window.location.hash.replace("#categoryBlogDiv", "") || "All";
    if (categoryFromHash) {
      setSelectedCategory(categoryFromHash); // Set category from hash if available
    }
  }, []); // Runs only on component mount

  return (
    <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};
