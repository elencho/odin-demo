import React from 'react';
import { StyleSheet } from 'react-native/Libraries/StyleSheet/StyleSheet';

import { THEME_LIGHT } from './variants';
import { ColorTheme } from './colors';
import { SpaceTheme } from './space';
import { FontTheme } from './font';

export interface Theme {
  id: string;
  color: ColorTheme;
  space: SpaceTheme;
  font: FontTheme;
}

interface Props {
  initial: Theme;
  children?: React.ReactNode;
}

interface ThemeData {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = React.createContext<ThemeData>({
  theme: THEME_LIGHT,
  toggleTheme: () => {
    console.log('ThemeProvider is not rendered!');
  },
});

export const OdinThemeProvider = React.memo<Props>((props: Props) => {
  const [theme, setTheme] = React.useState<Theme>(props?.initial);

  const toggleThemeCallback = React.useCallback(() => {
    setTheme(currentTheme => {
      if (currentTheme.id === THEME_LIGHT.id) {
        return THEME_LIGHT;
      }
      return currentTheme;
    });
  }, []);

  const MemoizedTheme = React.useMemo(() => {
    const value: ThemeData = {
      theme,
      toggleTheme: toggleThemeCallback,
    };
    return value;
  }, [theme, toggleThemeCallback]);

  return (
    <ThemeContext.Provider value={MemoizedTheme}>
      {props?.children}
    </ThemeContext.Provider>
  );
});

OdinThemeProvider.displayName = 'OdinThemeProvider';

export const useTheme = <Style extends StyleSheet.NamedStyles<Style>>(
  createStyles?: (theme: Theme) => Style,
) => {
  const data = React.useContext(ThemeContext);
  return {
    theme: data.theme,
    toggleTheme: data.toggleTheme,
    styles: createStyles?.(data.theme) ?? ({} as Style),
  };
};
