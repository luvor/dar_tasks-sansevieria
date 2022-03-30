import { createContext, ReactNode, useState } from "react";
import colors from "../assets/colors";
import { Color } from "../types";
interface ProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext<{
  theme: Color;
  themeHandler: (t: Color) => void;
}>({
  theme: colors[0],
  themeHandler: () => {},
});

export const ThemeHandlerProvider = ({ children }: ProviderProps) => {
  const [theme, setTheme] = useState<Color>(colors[0]);
  const themeHandler = (t: Color) => {
    setTheme(t);
  };
  return (
    <ThemeContext.Provider value={{ theme, themeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};
