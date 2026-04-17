import styled from 'styled-components'

export const MainContainer = styled.main`
  flex: 1;
  min-height: 100%;
  background: ${({ theme }) => theme.colors.mainBg};
  padding: 2.25rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
`

export const Section = styled.section`
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.9rem;
  padding-bottom: 0.45rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

export const SectionAccentBar = styled.span`
  display: inline-block;
  width: 3px;
  height: 0.85rem;
  background: ${({ theme }) => theme.colors.accent};
  border-radius: 2px;
  flex-shrink: 0;
`

export const SectionLabel = styled.h2`
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
`

export const MoveSectionBtn = styled.button.attrs(
  () => ({ 'data-pdf-ignore': '' } as Record<string, unknown>),
)`
  margin-left: auto;
  font-size: 0.58rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
  padding: 0.15rem 0.55rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.pill};
  background: transparent;
  cursor: pointer;
  letter-spacing: 0.02em;
  flex-shrink: 0;
  transition: background 0.12s ease, border-color 0.12s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.accentLight};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`

export const EmptyHint = styled.p`
  font-size: 0.72rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-style: italic;
  padding: 2rem 0;
  text-align: center;
`

export const Summary = styled.p`
  font-size: 0.77rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.75;
`

/* ── Experience ─────────────────────────────────── */

export const ExpItem = styled.article`
  margin-bottom: 1.15rem;
  padding-bottom: 1.15rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`

export const ExpHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.55rem;
  gap: 0.75rem;
`

export const ExpLeft = styled.div``

export const ExpCompany = styled.p`
  font-size: 0.84rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  line-height: 1.2;
`

export const ExpRole = styled.p`
  font-size: 0.73rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.accent};
  margin-top: 0.15rem;
`

export const ExpMeta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.1rem;
  flex-shrink: 0;

  span {
    font-size: 0.63rem;
    color: ${({ theme }) => theme.colors.textMuted};
    white-space: nowrap;
  }
`

export const ExpBullets = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.32rem;
`

export const ExpBullet = styled.li`
  font-size: 0.72rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  padding-left: 0.95rem;
  position: relative;

  &::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.accent};
    font-size: 0.58rem;
    top: 0.2rem;
  }
`

/* ── Projects ────────────────────────────────────── */

export const ProjItem = styled.article`
  margin-bottom: 1.05rem;
  padding-bottom: 1.05rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`

export const ProjHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.38rem;
  gap: 0.5rem;
`

export const ProjName = styled.p`
  font-size: 0.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
`

export const ProjLinks = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  flex-shrink: 0;
`

export const ProjLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.22rem;
  font-size: 0.6rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textMuted};
  padding: 0.12rem 0.45rem;
  border-radius: ${({ theme }) => theme.radius.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: color 0.15s ease, border-color 0.15s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`

export const ProjTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.28rem;
  margin-bottom: 0.45rem;
`

export const ProjTag = styled.span`
  font-size: 0.58rem;
  padding: 0.14rem 0.48rem;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme }) => theme.colors.accentLight};
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 500;
  border: 1px solid rgba(37, 99, 235, 0.18);
`

export const ProjBullets = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.28rem;
`

export const ProjBullet = styled.li`
  font-size: 0.71rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  padding-left: 0.95rem;
  position: relative;

  &::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.accent};
    font-size: 0.58rem;
    top: 0.2rem;
  }
`
