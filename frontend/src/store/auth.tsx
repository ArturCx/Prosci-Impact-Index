import React, { useCallback, useMemo, useState, type PropsWithChildren } from 'react';

export interface LoginPayload {
  email: string;
  password: string;
}

interface User {
  id: number;
  email: string;
}

interface AuthContext {
  isLoggedIn: boolean;
  user?: User;
  login: (payload: LoginPayload) => Promise<User>;
}

const AuthContext = React.createContext<AuthContext>(undefined as unknown as AuthContext);

const AuthContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | undefined>();

  const login = useCallback(
    async (payload: LoginPayload) => {
      const response = await fetch('http://localhost:3000/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to login');
      }

      const { user: _user } = await response.json();
      setIsLoggedIn(true);
      setUser(_user);
      return user as User;
    },
    [setIsLoggedIn, setUser]
  );

  const value = useMemo<AuthContext>(
    () => ({
      isLoggedIn,
      user,
      login,
    }),
    [isLoggedIn, user, login]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthContextProvider');
  }

  return context;
};

export default AuthContextProvider;
