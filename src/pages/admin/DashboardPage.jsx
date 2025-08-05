import React from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';

const DashboardPage = () => {
  return (
    <DashboardLayout activeMenu='Dashboard'  >
   
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <p className="text-gray-600">This is the DashboardPage content area.</p>
    </DashboardLayout>
  );
};

export default DashboardPage;
