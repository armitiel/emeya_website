import React, { createContext, useContext, useState, useEffect } from 'react';
import { Client } from '../types/client';
import { navigate } from '../utils/navigation';

interface User {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
}

interface AuthContextType {
  user: User | null;
  isLoginModalOpen: boolean;
  setLoginModalOpen: (open: boolean) => void;
  login: (credentials: { email: string; password: string }) => Promise<boolean>;
  register: (data: { name: string; email: string; password: string }) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('auth_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  useEffect(() => {
    if (user) {
      localStorage.setItem('auth_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('auth_user');
    }
  }, [user]);

  const login = async (credentials: { email: string; password: string }) => {
    // Simulate API call
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const foundUser = users.find((u: any) => 
      u.email === credentials.email && u.password === credentials.password
    );

    if (foundUser) {
      const userData = {
        id: foundUser.id,
        name: foundUser.name,
        email: foundUser.email,
        isAdmin: foundUser.email === 'admin@example.com'
      };
      setUser(userData);
      navigate('/dashboard');
      return true;
    }
    throw new Error('Invalid credentials');
  };

  const register = async (data: { name: string; email: string; password: string }) => {
    // Simulate API call
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    if (users.some((u: any) => u.email === data.email)) {
      throw new Error('Email already exists');
    }

    const newUser = {
      id: `user_${Date.now()}`,
      ...data,
      joinDate: new Date().toISOString(),
      treatments: [],
      upcomingAppointments: []
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // Log in the new user
    setUser({
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      isAdmin: false
    });

    navigate('/dashboard');
    return true;
  };

  const logout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, isLoginModalOpen, setLoginModalOpen, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};