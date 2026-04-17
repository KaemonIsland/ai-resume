import styled from 'styled-components'

export const Page2Paper = styled.div`
  display: flex;
  flex-direction: column;
  width: 794px;
  min-height: 1122px;
  background: ${({ theme }) => theme.colors.mainBg};
  box-shadow: ${({ theme }) => theme.shadows.resume};
  flex-shrink: 0;
  padding-bottom: 3rem;
`

export const Page2Header = styled.header`
  background: ${({ theme }) => theme.colors.sidebarBg};
  padding: 0.9rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
`

export const Page2Name = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.sidebarText};
  letter-spacing: -0.01em;
`

export const Page2Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.1rem;
`

export const Page2Role = styled.span`
  font-size: 0.62rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.sidebarAccent};
  letter-spacing: 0.1em;
  text-transform: uppercase;
`

export const Page2Continued = styled.span`
  font-size: 0.58rem;
  color: ${({ theme }) => theme.colors.sidebarMuted};
  letter-spacing: 0.04em;
`
