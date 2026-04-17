import { forwardRef } from 'react'
import styled from 'styled-components'
import type { ResumeData } from '../../../types/resume'

// ── D&D Parchment palette ─────────────────────────────────
const D = {
  parchment: '#f4e8c1',
  darkParchment: '#e8d49e',
  ink: '#1a0a00',
  brown: '#5c3a1e',
  darkBrown: '#3b2010',
  red: '#8b0000',
  gold: '#7a5800', // darkened from #b8860b → 5.1:1 on parchment (WCAG AA)
  muted: '#7a5c38',
  ruleLine: 'rgba(92, 58, 30, 0.25)',
}

const Sheet = styled.div`
  position: relative;
  width: 794px;
  min-height: 1122px;
  background: ${D.parchment};
  background-image:
    radial-gradient(ellipse at 15% 12%, rgba(180, 140, 60, 0.22) 0%, transparent 48%),
    radial-gradient(ellipse at 85% 88%, rgba(160, 110, 40, 0.18) 0%, transparent 48%),
    radial-gradient(ellipse at 50% 50%, rgba(200, 160, 80, 0.06) 0%, transparent 80%);
  color: ${D.ink};
  font-family: 'Palatino Linotype', 'Book Antiqua', 'Palatino', Georgia, serif;
  font-size: 0.7rem;
  line-height: 1.6;
  box-shadow:
    0 24px 64px rgba(0, 0, 0, 0.45),
    inset 0 0 120px rgba(139, 90, 43, 0.07);
  overflow: hidden;
  flex-shrink: 0;
  border: 4px solid ${D.darkBrown};
`

const Banner = styled.div`
  background: ${D.darkBrown};
  padding: 0.85rem 2rem 0.75rem;
  text-align: center;
  border-bottom: 3px double ${D.gold};
  position: relative;
`

const BannerTitle = styled.h1`
  font-family: 'Cinzel', 'Palatino Linotype', Georgia, serif;
  font-size: 1.35rem;
  font-weight: 900;
  color: ${D.parchment};
  letter-spacing: 0.4em;
  text-transform: uppercase;
`

const BannerSub = styled.div`
  font-size: 0.6rem;
  color: rgba(244, 232, 193, 0.6);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-top: 0.15rem;
`

const CharInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 2px solid ${D.brown};
`

const InfoCell = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  padding: 0.38rem 1.25rem;
  border-right: 1px solid ${D.ruleLine};
  border-bottom: 1px solid ${D.ruleLine};

  &:nth-child(2n) {
    border-right: none;
  }
`

const InfoLabel = styled.span`
  font-size: 0.56rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${D.red};
  font-weight: 700;
  white-space: nowrap;
  flex-shrink: 0;
  font-family: 'Cinzel', Georgia, serif;
`

const InfoValue = styled.span`
  font-size: 0.72rem;
  color: ${D.ink};
  font-weight: 600;
`

const AbilityRow = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.9rem 1.5rem 0.7rem;
  border-bottom: 2px solid ${D.brown};
  background: rgba(0, 0, 0, 0.025);
  gap: 0;
`

const AbilityBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid ${D.brown};
  padding: 0.4rem 0.55rem 0.5rem;
  min-width: 80px;
  background: #fff9ee;
  margin-right: -1px;

  &:first-child {
    border-radius: 4px 0 0 4px;
  }
  &:last-child {
    border-radius: 0 4px 4px 0;
    margin-right: 0;
  }
`

const AbilityName = styled.div`
  font-size: 0.54rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: ${D.red};
  font-family: 'Cinzel', Georgia, serif;
`

const AbilityScore = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  color: ${D.ink};
  line-height: 1.05;
  margin: 0.2rem 0 0.1rem;
  font-family: 'Palatino Linotype', Georgia, serif;
`

const AbilityMod = styled.div`
  font-size: 0.68rem;
  font-weight: 700;
  color: ${D.brown};
  border: 1px solid ${D.brown};
  border-radius: 3px;
  padding: 0.03rem 0.4rem;
  min-width: 2.6rem;
  text-align: center;
`

const AbilityFlavour = styled.div`
  font-size: 0.5rem;
  color: ${D.muted};
  margin-top: 0.15rem;
  font-style: italic;
  text-align: center;
  max-width: 5rem;
`

const Body = styled.div``

const Sec = styled.div`
  padding: 0.65rem 1.5rem;
  border-bottom: 1px solid ${D.ruleLine};
`

const SecTitle = styled.h2`
  font-family: 'Cinzel', 'Palatino Linotype', Georgia, serif;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: ${D.red};
  margin-bottom: 0.45rem;
  padding-bottom: 0.28rem;
  border-bottom: 1px solid ${D.darkParchment};
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before,
  &::after {
    content: '⚔';
    font-size: 0.6rem;
    opacity: 0.7;
  }
`

const TwoCols = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 1.5rem;
`

const SkillCategoryLabel = styled.div`
  font-size: 0.58rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${D.muted};
  margin-bottom: 0.2rem;
  margin-top: 0.35rem;
  font-family: 'Cinzel', Georgia, serif;

  &:first-child {
    margin-top: 0;
  }
`

const SkillTag = styled.span<{ $expert?: boolean }>`
  display: inline-block;
  font-size: 0.63rem;
  padding: 0.1rem 0.38rem;
  margin: 0.08rem 0.18rem;
  border: 1px solid ${(p) => (p.$expert ? D.red : D.brown)};
  color: ${(p) => (p.$expert ? D.red : D.ink)};
  background: ${(p) => (p.$expert ? 'rgba(139,0,0,0.06)' : 'transparent')};
  font-weight: ${(p) => (p.$expert ? '700' : '400')};
  border-radius: 2px;
`

const QuestEntry = styled.div`
  margin-bottom: 0.65rem;
  padding-bottom: 0.65rem;
  border-bottom: 1px dashed ${D.ruleLine};

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`

const QuestHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.2rem;
`

const QuestGuild = styled.span`
  font-size: 0.77rem;
  font-weight: 700;
  color: ${D.brown};
`

const QuestRole = styled.span`
  font-size: 0.67rem;
  font-style: italic;
  color: ${D.muted};
`

const QuestDates = styled.span`
  font-size: 0.6rem;
  color: ${D.muted};
  flex-shrink: 0;
`

const QuestBullet = styled.div`
  font-size: 0.67rem;
  padding-left: 1rem;
  line-height: 1.6;
  color: ${D.ink};

  &::before {
    content: '◆ ';
    color: ${D.gold};
    font-size: 0.5rem;
    vertical-align: 2px;
  }
`

const FeatLine = styled.div`
  font-size: 0.67rem;
  padding-left: 0.5rem;
  margin-bottom: 0.2rem;

  &::before {
    content: '★ ';
    color: ${D.gold};
  }
`

const ProjectLine = styled.div`
  margin-bottom: 0.35rem;
`

const ProjectName = styled.span`
  font-size: 0.7rem;
  font-weight: 700;
  color: ${D.brown};
`

const ProjectTech = styled.span`
  font-size: 0.6rem;
  color: ${D.muted};
  font-style: italic;
`

const BackstoryText = styled.p`
  font-size: 0.7rem;
  font-style: italic;
  color: ${D.ink};
  line-height: 1.75;
`

// ── Stat helpers ──────────────────────────────────────────

/** Derive ability scores from skill categories.
 *  The score (8–20) reflects how many skills are in each group
 *  relative to the most-stacked category — so your deepest stack = 20. */
function calcAbilityScores(data: ResumeData) {
  const groups = data.skills ?? []
  if (groups.length === 0) return []
  const maxCount = Math.max(...groups.map((g) => g.skills.length), 1)
  return groups.slice(0, 6).map((g) => {
    const score = Math.min(20, Math.max(8, Math.round(8 + (g.skills.length / maxCount) * 12)))
    // Use first "word" of category as the short stat label
    const label = g.category.split(/[\s&\/,+]+/)[0].toUpperCase().slice(0, 9)
    return { label, score, topSkills: g.skills.slice(0, 3) }
  })
}

function statMod(score: number): string {
  const m = Math.floor((score - 10) / 2)
  return m >= 0 ? `+${m}` : `${m}`
}

// ── Component ─────────────────────────────────────────────

interface Props {
  data: ResumeData
}

const DndTemplate = forwardRef<HTMLDivElement, Props>(({ data }, ref) => {
  const { contact, summary, experience, projects, skills, education, certifications } = data
  const abilityScores = calcAbilityScores(data)
  const level = (experience?.length ?? 0) + 3
  const race = skills?.[0]?.category ? `${skills[0].category} Artisan` : 'Full-Stack Human'
  const profBonus = `+${2 + Math.floor((level - 1) / 4)}`

  return (
    <Sheet ref={ref}>
      <Banner>
        <BannerTitle>⚔ Character Sheet ⚔</BannerTitle>
        <BannerSub>Adventurers Guild · Professional Registry · Certified Capable</BannerSub>
      </Banner>

      <CharInfo>
        <InfoCell>
          <InfoLabel>Character Name</InfoLabel>
          <InfoValue>{contact.name}</InfoValue>
        </InfoCell>
        <InfoCell>
          <InfoLabel>Class</InfoLabel>
          <InfoValue>{contact.role}</InfoValue>
        </InfoCell>
        <InfoCell>
          <InfoLabel>Race</InfoLabel>
          <InfoValue>{race}</InfoValue>
        </InfoCell>
        <InfoCell>
          <InfoLabel>Level</InfoLabel>
          <InfoValue>
            {level} &nbsp;<span style={{ color: D.muted, fontSize: '0.63rem' }}>
              (Prof. Bonus {profBonus})
            </span>
          </InfoValue>
        </InfoCell>
        {contact.location && (
          <InfoCell>
            <InfoLabel>Homeland</InfoLabel>
            <InfoValue>{contact.location}</InfoValue>
          </InfoCell>
        )}
        <InfoCell>
          <InfoLabel>Alignment</InfoLabel>
          <InfoValue>Lawful Good</InfoValue>
        </InfoCell>
        {contact.github && (
          <InfoCell>
            <InfoLabel>Sigil</InfoLabel>
            <InfoValue>{contact.github}</InfoValue>
          </InfoCell>
        )}
        {contact.email && (
          <InfoCell>
            <InfoLabel>Messenger Rune</InfoLabel>
            <InfoValue>{contact.email}</InfoValue>
          </InfoCell>
        )}
      </CharInfo>

      <AbilityRow>
        {abilityScores.map(({ label, score, topSkills }) => (
          <AbilityBox key={label}>
            <AbilityName>{label}</AbilityName>
            <AbilityScore>{score}</AbilityScore>
            <AbilityMod>{statMod(score)}</AbilityMod>
            {topSkills.map((skill) => (
              <AbilityFlavour key={skill}>{skill}</AbilityFlavour>
            ))}
          </AbilityBox>
        ))}
      </AbilityRow>

      <Body>
        {/* Skills */}
        {skills && skills.length > 0 && (
          <Sec>
            <SecTitle>Skills &amp; Proficiencies</SecTitle>
            <TwoCols>
              {skills.map((group, gi) => (
                <div key={group.category}>
                  <SkillCategoryLabel>{group.category}</SkillCategoryLabel>
                  {group.skills.map((skill, si) => (
                    <SkillTag key={skill} $expert={gi === 0 && si < 3}>
                      {skill}
                    </SkillTag>
                  ))}
                </div>
              ))}
            </TwoCols>
          </Sec>
        )}

        {/* Backstory */}
        {summary && (
          <Sec>
            <SecTitle>Backstory</SecTitle>
            <BackstoryText>{summary}</BackstoryText>
          </Sec>
        )}

        {/* Adventuring Log */}
        {experience && experience.length > 0 && (
          <Sec>
            <SecTitle>Adventuring Log</SecTitle>
            {experience.map((job, i) => (
              <QuestEntry key={i}>
                <QuestHead>
                  <div>
                    <QuestGuild>{job.company}</QuestGuild>{' '}
                    <QuestRole>· {job.role}</QuestRole>
                  </div>
                  <QuestDates>
                    {job.startDate} – {job.endDate}
                  </QuestDates>
                </QuestHead>
                {job.bullets.map((b, j) => (
                  <QuestBullet key={j}>{b}</QuestBullet>
                ))}
              </QuestEntry>
            ))}
          </Sec>
        )}

        <TwoCols>
          {/* Completed Quests (projects) */}
          {projects && projects.length > 0 && (
            <Sec>
              <SecTitle style={{ fontSize: '0.62rem' }}>Completed Quests</SecTitle>
              {projects.map((p, i) => (
                <ProjectLine key={i}>
                  <ProjectName>{p.name} </ProjectName>
                  <ProjectTech>— {p.tech.slice(0, 4).join(' · ')}</ProjectTech>
                  {p.bullets?.[0] && (
                    <div
                      style={{
                        fontSize: '0.63rem',
                        color: D.muted,
                        paddingLeft: '0.75rem',
                        marginTop: '0.1rem',
                      }}
                    >
                      {p.bullets[0]}
                    </div>
                  )}
                </ProjectLine>
              ))}
            </Sec>
          )}

          {/* Feats (certifications + education) */}
          <Sec>
            <SecTitle style={{ fontSize: '0.62rem' }}>Feats &amp; Training</SecTitle>
            {certifications?.map((cert, i) => (
              <FeatLine key={i}>
                <strong>{cert.name}</strong>
                {cert.issuer && (
                  <span style={{ color: D.muted }}> — {cert.issuer}</span>
                )}
                {cert.year && (
                  <span style={{ color: D.muted }}> [{cert.year}]</span>
                )}
              </FeatLine>
            ))}
            {education?.map((edu, i) => (
              <FeatLine key={`edu-${i}`}>
                <strong>{edu.institution}</strong>
                <span style={{ color: D.muted }}>
                  {' '}
                  — {edu.degree}
                  {edu.field ? `, ${edu.field}` : ''} [{edu.startYear}–{edu.endYear}]
                </span>
              </FeatLine>
            ))}
          </Sec>
        </TwoCols>
      </Body>
    </Sheet>
  )
})

DndTemplate.displayName = 'DndTemplate'
export default DndTemplate
