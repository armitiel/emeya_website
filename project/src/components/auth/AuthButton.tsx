import React from 'react';
import { LogIn, LogOut } from 'lucide-react';
import Button from '../ui/Button';
import LoginModal from './LoginModal';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';

const AuthButton = () => {
  const { isLoginModalOpen, setLoginModalOpen, user, logout } = useAuth();
  const { language } = useLanguage();

  if (user) {
    return (
      <Button
        variant="primary"
        onClick={logout}
        className="flex items-center space-x-2"
      >
        <LogOut className="h-4 w-4" />
        <span>{language === 'pl' ? 'Wyloguj się' : 'Logout'}</span>
      </Button>
    );
  }

  return (
    <>
      <Button
        variant="primary"
        onClick={() => setLoginModalOpen(true)}
        className="flex items-center space-x-2"
      >
        <LogIn className="h-4 w-4" />
        <span>{language === 'pl' ? 'Zaloguj się' : 'Login'}</span>
      </Button>
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setLoginModalOpen(false)}
      />
    </>
  );
};

export default AuthButton;