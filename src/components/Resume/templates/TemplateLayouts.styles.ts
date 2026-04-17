import styled, { css } from 'styled-components'
import type { TemplateId } from '../../../contexts/TemplateContext'

/* ── Sidebar width per template ─────────────────── */
export const sidebarWidths: Record<TemplateId, string> = {
  classic: '32%',
  compact: '26%',
  minimal: '0',
  modern: '0',
  terminal: '0',
  dnd: '0',
  retrorpg: '0',
  geocities: '0',
}

/* ── Sidebar container with template-aware width ── */
export const TemplateSidebar = styled.aside<{ $template: TemplateId }>`
  width: ${({ $template }) => sidebarWidths[$template]};
  min-height: 100%;
  background: ${({ theme }) => theme.colors.sidebarBg};
  color: ${({ theme }) => theme.colors.sidebarText};
  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  ${({ $template }) =>
    ($template === 'minimal' || $template === 'modern') &&
    css`
      display: none;
    `}
`

/* ── Modern template: full-width header strip ───── */
export const ModernHeader = styled.header`
  background: ${({ theme }) => theme.colors.sidebarBg};
  color: ${({ theme }) => theme.colors.sidebarText};
  padding: 1.4rem 2.25rem 1.2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-shrink: 0;
`

export const ModernAvatar = styled.img`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(255, 255, 255, 0.22);
  flex-shrink: 0;
`

export const ModernAvatarPlaceholder = styled.div`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
  border: 2px solid rgba(255, 255, 255, 0.22);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.sidebarText};
  flex-shrink: 0;
`

export const ModernIdentity = styled.div`
  flex: 1;
`

export const ModernName = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.sidebarText};
  line-height: 1.2;
`

export const ModernRole = styled.p`
  font-size: 0.68rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.sidebarAccent};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-top: 0.25rem;
`

export const ModernContacts = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.25rem;
  align-items: center;
  list-style: none;
`

export const ModernContactItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.65rem;
  color: ${({ theme }) => theme.colors.sidebarMuted};
`

/* ── Minimal template: name+role top header ──────── */
export const MinimalHeader = styled.header`
  padding: 2rem 2.25rem 1.5rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.accent};
`

export const MinimalName = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  line-height: 1.15;
`

export const MinimalRole = styled.p`
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
  margin-top: 0.3rem;
`

export const MinimalContactRow = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem 1rem;
  margin-top: 0.75rem;
  list-style: none;
`

export const MinimalContactItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.65rem;
  color: ${({ theme }) => theme.colors.textMuted};
`
