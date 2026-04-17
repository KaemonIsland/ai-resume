import type { Theme } from '../types/theme'
import { lightTheme } from './light'
import { forestTheme } from './forest'
import { slateTheme } from './slate'
import { roseTheme } from './rose'
import { midnightTheme } from './midnight'

export { lightTheme, forestTheme, slateTheme, roseTheme, midnightTheme }

export type ThemeId = 'light' | 'forest' | 'slate' | 'rose' | 'midnight'

export const THEMES: Record<ThemeId, Theme> = {
  light: lightTheme,
  forest: forestTheme,
  slate: slateTheme,
  rose: roseTheme,
  midnight: midnightTheme,
}

export const THEME_LABELS: Record<ThemeId, string> = {
  light: 'Classic Blue',
  forest: 'Forest',
  slate: 'Slate',
  rose: 'Rose',
  midnight: 'Midnight',
}
