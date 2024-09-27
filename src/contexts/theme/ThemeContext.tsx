import React, { createContext, useContext, useState } from "react";
import { ThemeEnum } from "../../enums/ThemeEnum";

type ThemeContextType = {
  theme: ThemeEnum;
  handlerTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

interface ThemeContextProviderProps {
  children: React.ReactNode
}

export function ThemeProvider( {children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<ThemeEnum>(ThemeEnum.LIGHT);
  
  const handlerTheme = () => {
    setTheme(
      prevState => prevState === ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT
    );
  }

  const data = {
    theme,
    handlerTheme
  }

  return (
    <ThemeContext.Provider value={data}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("Theme context should be used within ThemeContextProvider")
  }
  return context;
}