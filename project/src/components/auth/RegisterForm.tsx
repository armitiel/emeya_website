import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import Button from '../ui/Button';

interface RegisterFormProps {
  onSubmit: (data: { name: string; email: string; password: string }) => Promise<void>;
  onBack: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit, onBack }) => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const t = language === 'pl' ? {
    title: 'Zarejestruj się',
    name: 'Imię i nazwisko',
    email: 'Email',
    password: 'Hasło',
    confirmPassword: 'Potwierdź hasło',
    register: 'Zarejestruj',
    back: 'Wróć do logowania',
    passwordMismatch: 'Hasła nie są identyczne',
    namePlaceholder: 'Wprowadź imię i nazwisko',
    emailPlaceholder: 'Wprowadź email',
    passwordPlaceholder: 'Wprowadź hasło',
    confirmPasswordPlaceholder: 'Potwierdź hasło'
  } : {
    title: 'Register',
    name: 'Full Name',
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    register: 'Register',
    back: 'Back to login',
    passwordMismatch: 'Passwords do not match',
    namePlaceholder: 'Enter your full name',
    emailPlaceholder: 'Enter your email',
    passwordPlaceholder: 'Enter password',
    confirmPasswordPlaceholder: 'Confirm password'
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError(t.passwordMismatch);
      return;
    }

    try {
      await onSubmit({
        name: formData.name,
        email: formData.email,
        password: formData.password
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed');
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
            {t.name}
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder={t.namePlaceholder}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary"
            required
          />
        </div>

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

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t.confirmPassword}
          </label>
          <input
            type="password"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            placeholder={t.confirmPasswordPlaceholder}
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
          {t.register}
        </Button>

        <button
          type="button"
          onClick={onBack}
          className="w-full text-sm text-primary hover:text-primary-dark"
        >
          {t.back}
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;