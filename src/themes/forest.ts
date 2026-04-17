import type { Theme } from '../types/theme'

export const forestTheme: Theme = {
  name: 'forest',
  colors: {
    appBg: '#d4dfd6',
    surface: '#ffffff',
    sidebarBg: '#1a3d2b',
    sidebarText: '#edf7f0',
    sidebarMuted: '#8fb89a',
    sidebarAccent: '#86efac',
    sidebarBorder: 'rgba(255, 255, 255, 0.10)',
    mainBg: '#ffffff',
    accent: '#16a34a',
    accentLight: '#f0fdf4',
    textPrimary: '#111827',
    textSecondary: '#374151',
    textMuted: '#6b7280',
    border: '#d1fae5',
    tagBg: 'rgba(255, 255, 255, 0.10)',
    tagText: '#bbf7d0',
    tagBorder: 'rgba(255, 255, 255, 0.18)',
    toolbarBg: '#1a3d2b',
    toolbarText: '#edf7f0',
    buttonBg: '#16a34a',
    buttonText: '#ffffff',
    buttonHover: '#15803d',
  },
  fonts: {
    body: "'Inter', 'Segoe UI', system-ui, sans-serif",
    heading: "'Inter', 'Segoe UI', system-ui, sans-serif",
    display: "'Playfair Display', 'Georgia', serif",
  },
  shadows: {
    resume: '0 20px 60px rgba(0, 0, 0, 0.18), 0 4px 16px rgba(0, 0, 0, 0.10)',
    button: '0 2px 8px rgba(22, 163, 74, 0.30)',
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    pill: '9999px',
  },
}
