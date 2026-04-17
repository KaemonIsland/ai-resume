import type { Theme } from '../types/theme'

export const slateTheme: Theme = {
  name: 'slate',
  colors: {
    appBg: '#dde1ed',
    surface: '#ffffff',
    sidebarBg: '#1e1b4b',
    sidebarText: '#ede9fe',
    sidebarMuted: '#a5b4fc',
    sidebarAccent: '#c4b5fd',
    sidebarBorder: 'rgba(255, 255, 255, 0.10)',
    mainBg: '#ffffff',
    accent: '#7c3aed',
    accentLight: '#f5f3ff',
    textPrimary: '#111827',
    textSecondary: '#374151',
    textMuted: '#6b7280',
    border: '#ede9fe',
    tagBg: 'rgba(255, 255, 255, 0.10)',
    tagText: '#ddd6fe',
    tagBorder: 'rgba(255, 255, 255, 0.18)',
    toolbarBg: '#1e1b4b',
    toolbarText: '#ede9fe',
    buttonBg: '#7c3aed',
    buttonText: '#ffffff',
    buttonHover: '#6d28d9',
  },
  fonts: {
    body: "'Inter', 'Segoe UI', system-ui, sans-serif",
    heading: "'Inter', 'Segoe UI', system-ui, sans-serif",
    display: "'Playfair Display', 'Georgia', serif",
  },
  shadows: {
    resume: '0 20px 60px rgba(0, 0, 0, 0.18), 0 4px 16px rgba(0, 0, 0, 0.10)',
    button: '0 2px 8px rgba(124, 58, 237, 0.30)',
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    pill: '9999px',
  },
}
