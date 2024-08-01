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
  logout: () => void;
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

      const data = await response.json();
      const { access_token, user: _user } = data;
      localStorage.setItem('jwtToken', access_token);
      setIsLoggedIn(true);
      setUser(_user);
      return _user as User;
    },
    [setIsLoggedIn, setUser]
  );

  const logout = useCallback(() => {
    localStorage.removeItem('jwtToken');
    setIsLoggedIn(false);
    setUser(undefined);
  }, [setIsLoggedIn, setUser]);

  const value = useMemo<AuthContext>(
    () => ({
      isLoggedIn,
      user,
      login,
      logout,
    }),
    [isLoggedIn, user, login, logout]
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
