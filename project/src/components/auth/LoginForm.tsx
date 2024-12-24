import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import Button from '../ui/Button';

interface LoginFormProps {
  onSubmit: (credentials: { email: string; password: string }) => Promise<void>;
  onRegister: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, onRegister }) => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const t = language === 'pl' ? {
    title: 'Zaloguj się',
    email: 'Email',
    password: 'Hasło',
    login: 'Zaloguj',
    register: 'Nie masz konta? Zarejestruj się',
    emailPlaceholder: 'Wprowadź email',
    passwordPlaceholder: 'Wprowadź hasło'
  } : {
    title: 'Login',
    email: 'Email',
    password: 'Password',
    login: 'Login',
    register: 'Don\'t have an account? Register',
    emailPlaceholder: 'Enter your email',
    passwordPlaceholder: 'Enter password'
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      await onSubmit(formData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-heading text-primary mb-6 text-center">
        {t.title}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t.email}
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder={t.emailPlaceholder}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t.password}
          </label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            placeholder={t.passwordPlaceholder}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary"
            required
          />
        </div>

        {error && (
          <div className="p-3 bg-red-100 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}

        <Button variant="primary" type="submit" className="w-full">
          {t.login}
        </Button>

        <button
          type="button"
          onClick={onRegister}
          className="w-full text-sm text-primary hover:text-primary-dark"
        >
          {t.register}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;