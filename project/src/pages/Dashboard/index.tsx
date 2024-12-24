import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useLanguage } from '../../contexts/LanguageContext';
import TreatmentHistory from './components/TreatmentHistory';
import UpcomingAppointments from './components/UpcomingAppointments';
import ClientProfile from './components/ClientProfile';
import { navigate } from '../../utils/navigation';

const Dashboard = () => {
  const { user } = useAuth();
  const { language } = useLanguage();

  if (!user) {
    navigate('/');
    return null;
  }

  const t = language === 'pl' ? {
    welcome: 'Witaj',
    dashboard: 'Panel Klienta'
  } : {
    welcome: 'Welcome',
    dashboard: 'Client Dashboard'
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-40">
      <div className="container mx-auto px-6 pb-32">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-heading text-primary mb-2">
            {t.welcome}, {user.name}!
          </h1>
          <h2 className="text-xl text-gray-600 mb-12">{t.dashboard}</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Profile */}
            <div className="lg:col-span-1">
              <ClientProfile />
            </div>

            {/* Right Column - History & Appointments */}
            <div className="lg:col-span-2 space-y-8">
              <UpcomingAppointments />
              <TreatmentHistory />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;