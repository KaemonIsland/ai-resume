import { forwardRef } from 'react'
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiGlobe } from 'react-icons/fi'
import type { ResumeData, SectionLayout, SectionMoveHandler } from '../../types/resume'
import { useTemplate } from '../../contexts/TemplateContext'
import Sidebar from './Sidebar/Sidebar'
import MainContent from './MainContent/MainContent'
import Page2 from './Page2/Page2'
import { ResumeWrapper, ResumePaper, PageCutLine } from './Resume.styles'
import {
  ModernHeader,
  ModernAvatar,
  ModernAvatarPlaceholder,
  ModernIdentity,
  ModernName,
  ModernRole,
  ModernContacts,
  ModernContactItem,
  MinimalHeader,
  MinimalName,
  MinimalRole,
  MinimalContactRow,
  MinimalContactItem,
} from './templates/TemplateLayouts.styles'
import { sidebarWidths } from './templates/TemplateLayouts.styles'
import TerminalTemplate from './templates/TerminalTemplate'
import DndTemplate from './templates/DndTemplate'
import RetroRPGTemplate from './templates/RetroRPGTemplate'
import GeoCitiesTemplate from './templates/GeoCitiesTemplate'

interface ResumeProps {
  data: ResumeData
  sectionLayout: SectionLayout
  onSectionMove: SectionMoveHandler
  page2Ref: React.RefObject<HTMLDivElement | null>
}

const Resume = forwardRef<HTMLDivElement, ResumeProps>(
  ({ data, sectionLayout, onSectionMove, page2Ref }, ref) => {
    const template = useTemplate()
    const { contact } = data

    // ── Experimental full-page templates ─────────────────
    if (
      template === 'terminal' ||
      template === 'dnd' ||
      template === 'retrorpg' ||
      template === 'geocities'
    ) {
      return (
        <ResumeWrapper>
          {template === 'terminal' && <TerminalTemplate ref={ref} data={data} />}
          {template === 'dnd' && <DndTemplate ref={ref} data={data} />}
          {template === 'retrorpg' && <RetroRPGTemplate ref={ref} data={data} />}
          {template === 'geocities' && <GeoCitiesTemplate ref={ref} data={data} />}
        </ResumeWrapper>
      )
    }

    const hasPage2 =
      sectionLayout.summary === 2 ||
      sectionLayout.experiencePages.some((p) => p === 2) ||
      sectionLayout.projectPages.some((p) => p === 2)

    const initials = contact.name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .slice(0, 2)
      .toUpperCase()

    const showSidebar = template === 'classic' || template === 'compact'

    return (
      <ResumeWrapper>
        <ResumePaper ref={ref} $template={template}>
          {/* Modern: horizontal header strip with avatar + contact icons */}
          {template === 'modern' && (
            <ModernHeader>
              {contact.avatar ? (
                <ModernAvatar src={contact.avatar} alt={contact.name} />
              ) : (
                <ModernAvatarPlaceholder>{initials}</ModernAvatarPlaceholder>
              )}
              <ModernIdentity>
                <ModernName>{contact.name}</ModernName>
                <ModernRole>{contact.role}</ModernRole>
              </ModernIdentity>
              <ModernContacts>
                {contact.email && (
                  <ModernContactItem>
                    <FiMail size={11} />
                    {contact.email}
                  </ModernContactItem>
                )}
                {contact.phone && (
                  <ModernContactItem>
                    <FiPhone size={11} />
                    {contact.phone}
                  </ModernContactItem>
                )}
                {contact.location && (
                  <ModernContactItem>
                    <FiMapPin size={11} />
                    {contact.location}
                  </ModernContactItem>
                )}
                {contact.linkedin && (
                  <ModernContactItem>
                    <FiLinkedin size={11} />
                    {contact.linkedin}
                  </ModernContactItem>
                )}
                {contact.github && (
                  <ModernContactItem>
                    <FiGithub size={11} />
                    {contact.github}
                  </ModernContactItem>
                )}
                {contact.website && (
                  <ModernContactItem>
                    <FiGlobe size={11} />
                    {contact.website}
                  </ModernContactItem>
                )}
              </ModernContacts>
            </ModernHeader>
          )}

          {/* Minimal: name/role/contact inline header */}
          {template === 'minimal' && (
            <MinimalHeader>
              <MinimalName>{contact.name}</MinimalName>
              <MinimalRole>{contact.role}</MinimalRole>
              <MinimalContactRow>
                {contact.email && (
                  <MinimalContactItem>
                    <FiMail size={11} />
                    {contact.email}
                  </MinimalContactItem>
                )}
                {contact.phone && (
                  <MinimalContactItem>
                    <FiPhone size={11} />
                    {contact.phone}
                  </MinimalContactItem>
                )}
                {contact.location && (
                  <MinimalContactItem>
                    <FiMapPin size={11} />
                    {contact.location}
                  </MinimalContactItem>
                )}
                {contact.linkedin && (
                  <MinimalContactItem>
                    <FiLinkedin size={11} />
                    {contact.linkedin}
                  </MinimalContactItem>
                )}
                {contact.github && (
                  <MinimalContactItem>
                    <FiGithub size={11} />
                    {contact.github}
                  </MinimalContactItem>
                )}
                {contact.website && (
                  <MinimalContactItem>
                    <FiGlobe size={11} />
                    {contact.website}
                  </MinimalContactItem>
                )}
              </MinimalContactRow>
            </MinimalHeader>
          )}

          {/* Sidebar (classic + compact only) */}
          {showSidebar && (
            <Sidebar data={data} width={sidebarWidths[template]} />
          )}

          <MainContent
            data={data}
            page={1}
            sectionLayout={sectionLayout}
            onSectionMove={onSectionMove}
          />
          <PageCutLine data-pdf-ignore="" />
        </ResumePaper>

        {hasPage2 && (
          <Page2
            ref={page2Ref}
            data={data}
            sectionLayout={sectionLayout}
            onSectionMove={onSectionMove}
          />
        )}
      </ResumeWrapper>
    )
  },
)

Resume.displayName = 'Resume'

export default Resume

