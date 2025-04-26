import React, { useState, useMemo, createContext, useContext } from "react";
import { PaletteMode, ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import type {} from "@mui/lab/themeAugmentation";
import { common } from "@mui/material/colors";

type ThemeProp = {
  children: JSX.Element;
};

const ThemeContext = createContext({
  toggleTheme: () => {},
  isDarkMode: false,
});

const baseTheme = createTheme({
  breakpoints: {
    values: {
      xxs: 0,
      xs: 400,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1600,
    },
  },
});

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: {
      main: "#199ff7",
      contrastText: common.white,
    },
    ...(mode === "light"
      ? {
          bgColor: {
            light: "#fcfcfd",
            main: "#f2eeef",
            dark: "#efefee",
          },
          border: {
            main: "#dedddd",
          },
        }
      : {
          bgColor: {
            light: "#242526",
            main: "#18191a",
          },
          border: {
            main: "#27272c",
          },
        }),
  },

  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },

  breakpoints: baseTheme.breakpoints,
});

const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
  const [mode, setMode] = useState<PaletteMode>("light");

  const colorMode = useMemo(
    () => ({
      toggleTheme: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
      isDarkMode: mode === "dark",
    }),
    [mode]
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useThemeContext = () => useContext(ThemeContext);

export default ThemeConfig;
