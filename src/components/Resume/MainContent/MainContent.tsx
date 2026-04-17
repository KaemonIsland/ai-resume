import type { ResumeData, SectionLayout, PageNumber, SectionMoveHandler } from '../../../types/resume'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import {
  MainContainer,
  Section,
  SectionHeader,
  SectionAccentBar,
  SectionLabel,
  MoveSectionBtn,
  EmptyHint,
  Summary,
  ExpItem,
  ExpHeader,
  ExpLeft,
  ExpCompany,
  ExpRole,
  ExpMeta,
  ExpBullets,
  ExpBullet,
  ProjItem,
  ProjHeader,
  ProjName,
  ProjLinks,
  ProjLink,
  ProjTech,
  ProjTag,
  ProjBullets,
  ProjBullet,
} from './MainContent.styles'

interface MainContentProps {
  data: ResumeData
  page: PageNumber
  sectionLayout: SectionLayout
  onSectionMove: SectionMoveHandler
}

export default function MainContent({
  data,
  page,
  sectionLayout,
  onSectionMove,
}: MainContentProps) {
  const { summary, experience, projects } = data
  const moveLabel = page === 1 ? '↓ Page 2' : '↑ Page 1'

  const showSummary = !!summary && sectionLayout.summary === page

  // Per-item filtering for experience and projects
  const expOnPage = (experience ?? []).map((exp, i) => ({
    exp,
    i,
    show: sectionLayout.experiencePages[i] === page,
  })).filter((e) => e.show)

  const projOnPage = (projects ?? []).map((proj, i) => ({
    proj,
    i,
    show: sectionLayout.projectPages[i] === page,
  })).filter((p) => p.show)

  // "cont." label when some items of the same section also live on the other page
  const expHasOtherPage = (experience ?? []).some(
    (_, i) => sectionLayout.experiencePages[i] !== page,
  )
  const projHasOtherPage = (projects ?? []).some(
    (_, i) => sectionLayout.projectPages[i] !== page,
  )

  const expLabel = page === 2 && expHasOtherPage ? 'Experience (cont.)' : 'Experience'
  const projLabel = page === 2 && projHasOtherPage ? 'Projects (cont.)' : 'Projects'

  const hasContent = showSummary || expOnPage.length > 0 || projOnPage.length > 0

  if (!hasContent) {
    return (
      <MainContainer>
        <EmptyHint>No sections on this page — use ↓ buttons to move content here.</EmptyHint>
      </MainContainer>
    )
  }

  return (
    <MainContainer>
      {/* Summary */}
      {showSummary && (
        <Section>
          <SectionHeader>
            <SectionAccentBar />
            <SectionLabel>Professional Summary</SectionLabel>
            <MoveSectionBtn onClick={() => onSectionMove('summary')}>
              {moveLabel}
            </MoveSectionBtn>
          </SectionHeader>
          <Summary>{summary}</Summary>
        </Section>
      )}

      {/* Experience */}
      {expOnPage.length > 0 && (
        <Section>
          <SectionHeader>
            <SectionAccentBar />
            <SectionLabel>{expLabel}</SectionLabel>
          </SectionHeader>
          {expOnPage.map(({ exp, i }) => (
            <ExpItem key={i}>
              <ExpHeader>
                <ExpLeft>
                  <ExpCompany>{exp.company}</ExpCompany>
                  <ExpRole>{exp.role}</ExpRole>
                </ExpLeft>
                <ExpMeta>
                  <span>
                    {exp.startDate} – {exp.endDate}
                  </span>
                  {exp.location && <span>{exp.location}</span>}
                </ExpMeta>
              </ExpHeader>
              <ExpBullets>
                {exp.bullets.map((bullet, bi) => (
                  <ExpBullet key={bi}>{bullet}</ExpBullet>
                ))}
              </ExpBullets>
              <MoveSectionBtn onClick={() => onSectionMove('experience', i)}>
                {moveLabel}
              </MoveSectionBtn>
            </ExpItem>
          ))}
        </Section>
      )}

      {/* Projects */}
      {projOnPage.length > 0 && (
        <Section>
          <SectionHeader>
            <SectionAccentBar />
            <SectionLabel>{projLabel}</SectionLabel>
          </SectionHeader>
          {projOnPage.map(({ proj, i }) => (
            <ProjItem key={i}>
              <ProjHeader>
                <ProjName>{proj.name}</ProjName>
                <ProjLinks>
                  {proj.link && (
                    <ProjLink href={proj.link} target="_blank" rel="noopener noreferrer">
                      <FiExternalLink size={10} />
                      Live
                    </ProjLink>
                  )}
                  {proj.repo && (
                    <ProjLink
                      href={proj.repo.startsWith('http') ? proj.repo : `https://${proj.repo}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiGithub size={10} />
                      Repo
                    </ProjLink>
                  )}
                </ProjLinks>
              </ProjHeader>
              <ProjTech>
                {proj.tech.map((t) => (
                  <ProjTag key={t}>{t}</ProjTag>
                ))}
              </ProjTech>
              <ProjBullets>
                {proj.bullets.map((bullet, bi) => (
                  <ProjBullet key={bi}>{bullet}</ProjBullet>
                ))}
              </ProjBullets>
              <MoveSectionBtn onClick={() => onSectionMove('project', i)}>
                {moveLabel}
              </MoveSectionBtn>
            </ProjItem>
          ))}
        </Section>
      )}
    </MainContainer>
  )
}
