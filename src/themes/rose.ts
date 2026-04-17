import type { Theme } from '../types/theme'

export const roseTheme: Theme = {
  name: 'rose',
  colors: {
    appBg: '#e8d8da',
    surface: '#ffffff',
    sidebarBg: '#4a1020',
    sidebarText: '#fde8ec',
    sidebarMuted: '#f0a0ad',
    sidebarAccent: '#fda4af',
    sidebarBorder: 'rgba(255, 255, 255, 0.10)',
    mainBg: '#ffffff',
    accent: '#be123c',
    accentLight: '#fff1f2',
    textPrimary: '#111827',
    textSecondary: '#374151',
    textMuted: '#6b7280',
    border: '#ffe4e6',
    tagBg: 'rgba(255, 255, 255, 0.10)',
    tagText: '#fecdd3',
    tagBorder: 'rgba(255, 255, 255, 0.18)',
    toolbarBg: '#4a1020',
    toolbarText: '#fde8ec',
    buttonBg: '#be123c',
    buttonText: '#ffffff',
    buttonHover: '#9f1239',
  },
  fonts: {
    body: "'Inter', 'Segoe UI', system-ui, sans-serif",
    heading: "'Inter', 'Segoe UI', system-ui, sans-serif",
    display: "'Playfair Display', 'Georgia', serif",
  },
  shadows: {
    resume: '0 20px 60px rgba(0, 0, 0, 0.18), 0 4px 16px rgba(0, 0, 0, 0.10)',
    button: '0 2px 8px rgba(190, 18, 60, 0.30)',
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    pill: '9999px',
  },
}
