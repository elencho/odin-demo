export type FontTheme = {
  size: {
    title: number;
    subtitle: number;
    body: number;
    caption: number;
    description: number;
    button: number;
  };
  fontFamily: {
    regular: string;
  };
};
export const FONT: FontTheme = {
  size: {
    title: 24,
    subtitle: 20,
    body: 16,
    caption: 12,
    description: 14,
    button: 16,
  },
  fontFamily: {
    regular: 'Helvetica',
  },
};
