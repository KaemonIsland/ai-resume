import type { Theme } from '../types/theme'

export const lightTheme: Theme = {
  name: 'light',
  colors: {
    appBg: '#dde4ef',
    surface: '#ffffff',
    sidebarBg: '#1b3a6b',
    sidebarText: '#f0f6ff',
    sidebarMuted: '#93b5d8',
    sidebarAccent: '#93c5fd',
    sidebarBorder: 'rgba(255, 255, 255, 0.10)',
    mainBg: '#ffffff',
    accent: '#2563eb',
    accentLight: '#eff6ff',
    textPrimary: '#111827',
    textSecondary: '#4b5563',
    textMuted: '#6b7280',
    border: '#e5e7eb',
    tagBg: 'rgba(255, 255, 255, 0.10)',
    tagText: '#bfdbfe',
    tagBorder: 'rgba(255, 255, 255, 0.18)',
    toolbarBg: '#1b3a6b',
    toolbarText: '#f0f6ff',
    buttonBg: '#2563eb',
    buttonText: '#ffffff',
    buttonHover: '#1d4ed8',
  },
  fonts: {
    body: "'Inter', 'Segoe UI', system-ui, sans-serif",
    heading: "'Inter', 'Segoe UI', system-ui, sans-serif",
    display: "'Playfair Display', 'Georgia', serif",
  },
  shadows: {
    resume: '0 20px 60px rgba(0, 0, 0, 0.18), 0 4px 16px rgba(0, 0, 0, 0.10)',
    button: '0 2px 8px rgba(37, 99, 235, 0.30)',
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    pill: '9999px',
  },
}
