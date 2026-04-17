import type { ResumeData } from '../../../types/resume'
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiGlobe } from 'react-icons/fi'
import {
  SidebarContainer,
  IdentityBlock,
  AvatarPlaceholder,
  AvatarImage,
  FullName,
  RoleLabel,
  Divider,
  Section,
  SectionLabel,
  ContactList,
  ContactItem,
  ContactIcon,
  ContactText,
  SkillGroup,
  SkillCategory,
  SkillTags,
  SkillTag,
  EduItem,
  EduInstitution,
  EduDegree,
  EduMeta,
  CertItem,
  CertName,
  CertMeta,
} from './Sidebar.styles'

interface SidebarProps {
  data: ResumeData
  width?: string
}

export default function Sidebar({ data, width }: SidebarProps) {
  const { contact, skills, education, certifications } = data

  const initials = contact.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <SidebarContainer $width={width}>
      {/* Identity */}
      <IdentityBlock>
        {contact.avatar ? (
          <AvatarImage src={contact.avatar} alt={contact.name} />
        ) : (
          <AvatarPlaceholder>{initials}</AvatarPlaceholder>
        )}
        <FullName>{contact.name}</FullName>
        <RoleLabel>{contact.role}</RoleLabel>
      </IdentityBlock>

      <Divider />

      {/* Contact */}
      <Section>
        <SectionLabel>Contact</SectionLabel>
        <ContactList>
          <ContactItem>
            <ContactIcon>
              <FiMail size={12} />
            </ContactIcon>
            <ContactText>{contact.email}</ContactText>
          </ContactItem>

          {contact.phone && (
            <ContactItem>
              <ContactIcon>
                <FiPhone size={12} />
              </ContactIcon>
              <ContactText>{contact.phone}</ContactText>
            </ContactItem>
          )}

          {contact.location && (
            <ContactItem>
              <ContactIcon>
                <FiMapPin size={12} />
              </ContactIcon>
              <ContactText>{contact.location}</ContactText>
            </ContactItem>
          )}

          {contact.linkedin && (
            <ContactItem>
              <ContactIcon>
                <FiLinkedin size={12} />
              </ContactIcon>
              <ContactText>{contact.linkedin}</ContactText>
            </ContactItem>
          )}

          {contact.github && (
            <ContactItem>
              <ContactIcon>
                <FiGithub size={12} />
              </ContactIcon>
              <ContactText>{contact.github}</ContactText>
            </ContactItem>
          )}

          {contact.website && (
            <ContactItem>
              <ContactIcon>
                <FiGlobe size={12} />
              </ContactIcon>
              <ContactText>{contact.website}</ContactText>
            </ContactItem>
          )}
        </ContactList>
      </Section>

      {/* Skills */}
      {skills && skills.length > 0 && (
        <Section>
          <SectionLabel>Skills</SectionLabel>
          {skills.map((group) => (
            <SkillGroup key={group.category}>
              <SkillCategory>{group.category}</SkillCategory>
              <SkillTags>
                {group.skills.map((skill) => (
                  <SkillTag key={skill}>{skill}</SkillTag>
                ))}
              </SkillTags>
            </SkillGroup>
          ))}
        </Section>
      )}

      {/* Education */}
      {education && education.length > 0 && (
        <Section>
          <SectionLabel>Education</SectionLabel>
          {education.map((edu, i) => (
            <EduItem key={i}>
              <EduInstitution>{edu.institution}</EduInstitution>
              <EduDegree>
                {edu.degree}
                {edu.field ? `, ${edu.field}` : ''}
              </EduDegree>
              <EduMeta>
                {edu.startYear} – {edu.endYear}
              </EduMeta>
              {edu.honors && edu.honors.length > 0 && (
                <EduMeta>{edu.honors.join(' · ')}</EduMeta>
              )}
            </EduItem>
          ))}
        </Section>
      )}

      {/* Certifications */}
      {certifications && certifications.length > 0 && (
        <Section>
          <SectionLabel>Certifications</SectionLabel>
          {certifications.map((cert, i) => (
            <CertItem key={i}>
              <CertName>{cert.name}</CertName>
              <CertMeta>
                {cert.issuer ? `${cert.issuer} · ` : ''}
                {cert.year}
              </CertMeta>
            </CertItem>
          ))}
        </Section>
      )}
    </SidebarContainer>
  )
}
