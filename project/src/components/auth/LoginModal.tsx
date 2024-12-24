import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { useAuth } from '../../contexts/AuthContext';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const { language } = useLanguage();
  const { login, register } = useAuth();

  if (!isOpen) return null;

  const handleLogin = async (credentials: { email: string; password: string }) => {
    const success = await login(credentials);
    if (success) {
      onClose();
    }
  };

  const handleRegister = async (data: { name: string; email: string; password: string }) => {
    const success = await register(data);
    if (success) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-32">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative animate-slideDown shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-6 w-6" />
        </button>

        {isRegistering ? (
          <RegisterForm
            onSubmit={handleRegister}
            onBack={() => setIsRegistering(false)}
          />
        ) : (
          <LoginForm
            onSubmit={handleLogin}
            onRegister={() => setIsRegistering(true)}
          />
        )}
      </div>
    </div>
  );
};

export default LoginModal;