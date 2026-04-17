import styled from 'styled-components'

export const SidebarContainer = styled.aside<{ $width?: string }>`
  width: ${({ $width }) => $width ?? '32%'};
  min-height: 100%;
  background: ${({ theme }) => theme.colors.sidebarBg};
  color: ${({ theme }) => theme.colors.sidebarText};
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`

export const IdentityBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.25rem 1.5rem 1.75rem;
  text-align: center;
`

export const AvatarPlaceholder = styled.div`
  width: 76px;
  height: 76px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
  border: 2px solid rgba(255, 255, 255, 0.22);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.sidebarText};
  margin-bottom: 1rem;
  flex-shrink: 0;
`

export const AvatarImage = styled.img`
  width: 76px;
  height: 76px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(255, 255, 255, 0.22);
  margin-bottom: 1rem;
`

export const FullName = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.sidebarText};
  line-height: 1.2;
  margin-bottom: 0.4rem;
  letter-spacing: -0.01em;
`

export const RoleLabel = styled.p`
  font-size: 0.68rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.sidebarAccent};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  line-height: 1.3;
`

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.sidebarBorder};
  margin: 0;
`

export const Section = styled.section`
  padding: 1.2rem 1.4rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.sidebarBorder};

  &:last-of-type {
    border-bottom: none;
  }
`

export const SectionLabel = styled.h2`
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.sidebarAccent};
  margin-bottom: 0.8rem;
`

export const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const ContactItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.55rem;
`

export const ContactIcon = styled.span`
  color: ${({ theme }) => theme.colors.sidebarAccent};
  display: flex;
  align-items: center;
  flex-shrink: 0;
  margin-top: 1px;
  opacity: 0.85;
`

export const ContactText = styled.span`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.sidebarMuted};
  word-break: break-all;
  line-height: 1.4;
`

export const SkillGroup = styled.div`
  margin-bottom: 0.8rem;

  &:last-child {
    margin-bottom: 0;
  }
`

export const SkillCategory = styled.p`
  font-size: 0.62rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.sidebarText};
  margin-bottom: 0.4rem;
  opacity: 0.75;
  letter-spacing: 0.02em;
`

export const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.28rem;
`

export const SkillTag = styled.span`
  font-size: 0.6rem;
  padding: 0.18rem 0.5rem;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme }) => theme.colors.tagBg};
  color: ${({ theme }) => theme.colors.tagText};
  border: 1px solid ${({ theme }) => theme.colors.tagBorder};
  line-height: 1.5;
`

export const EduItem = styled.div`
  margin-bottom: 0.85rem;

  &:last-child {
    margin-bottom: 0;
  }
`

export const EduInstitution = styled.p`
  font-size: 0.7rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.sidebarText};
  line-height: 1.3;
`

export const EduDegree = styled.p`
  font-size: 0.65rem;
  color: ${({ theme }) => theme.colors.sidebarMuted};
  margin-top: 0.18rem;
  line-height: 1.35;
`

export const EduMeta = styled.p`
  font-size: 0.6rem;
  color: ${({ theme }) => theme.colors.sidebarAccent};
  margin-top: 0.12rem;
  opacity: 0.8;
`

export const CertItem = styled.div`
  margin-bottom: 0.7rem;

  &:last-child {
    margin-bottom: 0;
  }
`

export const CertName = styled.p`
  font-size: 0.68rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.sidebarText};
  line-height: 1.3;
`

export const CertMeta = styled.p`
  font-size: 0.6rem;
  color: ${({ theme }) => theme.colors.sidebarMuted};
  margin-top: 0.12rem;
`
