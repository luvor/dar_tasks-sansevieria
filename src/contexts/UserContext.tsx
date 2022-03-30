import { createContext, ReactNode, useState } from "react";
import { User } from "../types";
interface ProviderProps {
  children: ReactNode;
}

export const UserContext = createContext<{
  user: User | null;
  userHandler: (m: User | null) => void;
}>({ user: null, userHandler: () => {} });

export const UserProvider = ({ children }: ProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const userHandler = (u: User | null) => {
    setUser(u);
  };
  return (
    <UserContext.Provider value={{ user, userHandler }}>
      {children}
    </UserContext.Provider>
  );
};
