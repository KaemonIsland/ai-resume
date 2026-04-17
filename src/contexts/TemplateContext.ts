import { createContext, useContext } from 'react'

export type TemplateId =
  | 'classic'
  | 'compact'
  | 'minimal'
  | 'modern'
  | 'terminal'
  | 'dnd'
  | 'retrorpg'
  | 'geocities'

export const TEMPLATE_LABELS: Record<TemplateId, string> = {
  classic: 'Classic',
  compact: 'Compact',
  minimal: 'Minimal',
  modern: 'Modern',
  terminal: '💻 Terminal',
  dnd: '⚔ D&D Sheet',
  retrorpg: '🕹 8-bit RPG',
  geocities: '🌐 GeoCities',
}

export const TemplateContext = createContext<TemplateId>('classic')

export function useTemplate(): TemplateId {
  return useContext(TemplateContext)
}
