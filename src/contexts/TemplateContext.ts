import { createContext, useContext } from 'react'

export type TemplateId = 'classic' | 'compact' | 'minimal' | 'modern'

export const TEMPLATE_LABELS: Record<TemplateId, string> = {
  classic: 'Classic',
  compact: 'Compact',
  minimal: 'Minimal',
  modern: 'Modern',
}

export const TemplateContext = createContext<TemplateId>('classic')

export function useTemplate(): TemplateId {
  return useContext(TemplateContext)
}
