import type { Theme } from '../types/theme'

export const midnightTheme: Theme = {
  name: 'midnight',
  colors: {
    appBg: '#1c1c28',
    surface: '#252535',
    sidebarBg: '#12121e',
    sidebarText: '#e2f0ff',
    sidebarMuted: '#7ca3c0',
    sidebarAccent: '#67e8f9',
    sidebarBorder: 'rgba(255, 255, 255, 0.08)',
    mainBg: '#1e1e2e',
    accent: '#06b6d4',
    accentLight: '#0e3040',
    textPrimary: '#e2f0ff',
    textSecondary: '#94a3b8',
    textMuted: '#64748b',
    border: '#2d3a4a',
    tagBg: 'rgba(255, 255, 255, 0.06)',
    tagText: '#a5f3fc',
    tagBorder: 'rgba(103, 232, 249, 0.20)',
    toolbarBg: '#0d0d1a',
    toolbarText: '#e2f0ff',
    buttonBg: '#06b6d4',
    buttonText: '#0d0d1a',
    buttonHover: '#0891b2',
  },
  fonts: {
    body: "'Inter', 'Segoe UI', system-ui, sans-serif",
    heading: "'Inter', 'Segoe UI', system-ui, sans-serif",
    display: "'Playfair Display', 'Georgia', serif",
  },
  shadows: {
    resume: '0 20px 60px rgba(0, 0, 0, 0.50), 0 4px 16px rgba(0, 0, 0, 0.30)',
    button: '0 2px 8px rgba(6, 182, 212, 0.35)',
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    pill: '9999px',
  },
}
