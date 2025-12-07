import { Platform } from 'react-native';

const tintColorLight = '#2F7C78'; // accent teal
const tintColorDark = '#44A39C';

export const Colors = {
  light: {
    // core
    text: '#1A1A1A',
    background: '#FAFAF7',

    // extra neutrals
    surface: '#FFFFFF',
    border: '#E6E4E0',

    textSecondary: '#6B6B6B',
    textMuted: '#9E9E9E',

    accent: tintColorLight,

    // icons / tabs (used by template)
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,

    // states
    success: '#3A8F3D',
    warning: '#E3A008',
    error: '#D64545',
    info: '#2D81E0',
  },
  dark: {
    // core
    text: '#F5F5F5',
    background: '#050608',

    // extra neutrals
    surface: '#121316',
    border: '#2A2C33',

    textSecondary: '#C2C2C2',
    textMuted: '#8D8D8D',

    accent: tintColorDark,

    // icons / tabs
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,

    // states
    success: '#4CAF50',
    warning: '#F2C14F',
    error: '#F87171',
    info: '#60A5FA',
  },
};

export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono:
      "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
