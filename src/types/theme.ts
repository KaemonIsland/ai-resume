export interface ThemeColors {
  appBg: string
  surface: string
  sidebarBg: string
  sidebarText: string
  sidebarMuted: string
  sidebarAccent: string
  sidebarBorder: string
  mainBg: string
  accent: string
  accentLight: string
  textPrimary: string
  textSecondary: string
  textMuted: string
  border: string
  tagBg: string
  tagText: string
  tagBorder: string
  toolbarBg: string
  toolbarText: string
  buttonBg: string
  buttonText: string
  buttonHover: string
}

export interface Theme {
  name: string
  colors: ThemeColors
  fonts: {
    body: string
    heading: string
    display: string
  }
  shadows: {
    resume: string
    button: string
  }
  radius: {
    sm: string
    md: string
    lg: string
    pill: string
  }
}
