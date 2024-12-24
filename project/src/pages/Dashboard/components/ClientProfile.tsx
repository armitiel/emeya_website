import React from 'react';
import { User, Calendar } from 'lucide-react';
import { useAuth } from '../../../contexts/AuthContext';
import { useLanguage } from '../../../contexts/LanguageContext';
import { MysticCard } from '../../../components/ui/MysticCard';

const ClientProfile = () => {
  const { user } = useAuth();
  const { language } = useLanguage();

  const t = language === 'pl' ? {
    profile: 'Profil',
    joinDate: 'Data dołączenia',
    email: 'Email',
    editProfile: 'Edytuj profil'
  } : {
    profile: 'Profile',
    joinDate: 'Join date',
    email: 'Email',
    editProfile: 'Edit profile'
  };

  return (
    <MysticCard className="p-6 bg-white">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
          <User className="w-8 h-8 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-heading text-primary">{t.profile}</h3>
          <p className="text-gray-600">{user?.name}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-sm text-gray-500">{t.email}</label>
          <p className="text-gray-700">{user?.email}</p>
        </div>

        <div>
          <label className="text-sm text-gray-500">{t.joinDate}</label>
          <div className="flex items-center text-gray-700">
            <Calendar className="w-4 h-4 mr-2" />
            {new Date().toLocaleDateString()}
          </div>
        </div>

        <button className="w-full px-4 py-2 mt-4 text-sm text-primary hover:text-primary-dark border border-primary hover:border-primary-dark rounded-lg transition-colors">
          {t.editProfile}
        </button>
      </div>
    </MysticCard>
  );
};

export default ClientProfile;