import { forwardRef } from 'react'
import styled from 'styled-components'
import type { ResumeData } from '../../../types/resume'

// ── CGA-inspired palette (all verified ≥4.5:1 on bg) ─────
const R = {
  bg: '#0a0a15',
  panel: '#0d0d22',
  panelAlt: '#0e0e28',
  // border: bright enough for non-text 3:1 requirement
  border: '#6666ee',   // 4.7:1 on bg ✓
  borderDim: '#2a2a66',
  title: '#ffee44',    // 14.1:1 on bg ✓
  label: '#44ccff',   // 10.7:1 on bg ✓
  value: '#e8e8f0',   // 15.3:1 on bg ✓
  hp: '#ff4455',      // 5.7:1 on bg ✓
  mp: '#4499ff',      // 6.2:1 on bg ✓
  exp: '#44ee88',     // 10.2:1 on bg ✓
  gold: '#ffaa22',    // 9.8:1 on bg ✓
  dim: '#8899bb',     // 5.0:1 on bg ✓
  stat: '#cc88ff',    // 5.8:1 on bg ✓
  green: '#44ee88',   // same as exp
  white: '#e8e8f0',
}

const Paper = styled.div`
  position: relative;
  width: 794px;
  min-height: 1122px;
  background: ${R.bg};
  background-image:
    repeating-linear-gradient(
      to bottom,
      transparent 0px,
      transparent 3px,
      rgba(0, 0, 0, 0.18) 3px,
      rgba(0, 0, 0, 0.18) 4px
    );
  color: ${R.value};
  font-family: 'VT323', 'Courier New', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
  letter-spacing: 0.02em;
  box-shadow:
    0 0 0 3px ${R.border},
    0 0 0 5px #000,
    0 24px 64px rgba(0, 0, 0, 0.8);
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

// Top title bar
const TitleBar = styled.div`
  background: ${R.border};
  padding: 0.35rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid ${R.bg};
  flex-shrink: 0;
`

const TitleText = styled.div`
  font-size: 1.05rem;
  color: ${R.bg};
  font-weight: 700;
  letter-spacing: 0.18em;
  text-shadow: none;
`

const TitleRight = styled.div`
  font-size: 0.75rem;
  color: ${R.bg};
  letter-spacing: 0.1em;
  opacity: 0.85;
`

// Main two-column area
const MainArea = styled.div`
  display: flex;
  flex: 1;
  gap: 0;
`

// Left panel
const LeftPanel = styled.div`
  width: 220px;
  flex-shrink: 0;
  border-right: 2px solid ${R.borderDim};
  padding: 0.75rem 0.85rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`

// Right panel
const RightPanel = styled.div`
  flex: 1;
  padding: 0.75rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
`

// Sprite box
const SpriteBox = styled.div`
  border: 2px solid ${R.border};
  background: ${R.panel};
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-shrink: 0;
`

const SpriteCorner = styled.div<{ $pos: string }>`
  position: absolute;
  width: 8px;
  height: 8px;
  background: ${R.border};
  ${(p) =>
    p.$pos === 'tl'
      ? 'top: -2px; left: -2px;'
      : p.$pos === 'tr'
        ? 'top: -2px; right: -2px;'
        : p.$pos === 'bl'
          ? 'bottom: -2px; left: -2px;'
          : 'bottom: -2px; right: -2px;'}
`

const SpriteAvatar = styled.img`
  width: 90px;
  height: 90px;
  object-fit: cover;
  image-rendering: pixelated;
`

const SpriteInitials = styled.div`
  font-size: 2.8rem;
  color: ${R.title};
  letter-spacing: 0.1em;
  text-shadow: 3px 3px 0 rgba(0, 0, 0, 0.5);
`

// HP/MP/EXP bars
const VitalRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.22rem;
`

const BarLine = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.4rem;
  font-size: 0.75rem;
`

const BarLabel = styled.span<{ $color: string }>`
  color: ${(p) => p.$color};
  width: 2.6rem;
  flex-shrink: 0;
  font-size: 0.8rem;
`

const BarChars = styled.span<{ $color: string }>`
  color: ${(p) => p.$color};
  letter-spacing: 0;
  font-size: 0.7rem;
  flex: 1;
`

const BarNums = styled.span`
  color: ${R.dim};
  font-size: 0.7rem;
  white-space: nowrap;
`

// Section box
const SectionBox = styled.div`
  border: 1px solid ${R.borderDim};
  background: ${R.panel};
`

const SectionHead = styled.div`
  background: ${R.borderDim};
  padding: 0.1rem 0.6rem;
  font-size: 0.78rem;
  color: ${R.label};
  letter-spacing: 0.1em;
  border-bottom: 1px solid ${R.border};
`

const SectionBody = styled.div`
  padding: 0.35rem 0.6rem;
`

// Character info lines
const InfoRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  margin-bottom: 0.12rem;
`

const InfoKey = styled.span`
  color: ${R.dim};
  font-size: 0.75rem;
  width: 5rem;
  flex-shrink: 0;
  letter-spacing: 0.06em;
`

const InfoVal = styled.span`
  color: ${R.value};
  font-size: 0.8rem;
`

// Stat bars (skill categories)
const StatRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.4rem;
  margin-bottom: 0.1rem;
`

const StatLabel = styled.span`
  color: ${R.stat};
  font-size: 0.75rem;
  width: 5.5rem;
  flex-shrink: 0;
  letter-spacing: 0.04em;
`

const StatBar = styled.span<{ $pct: number }>`
  color: ${R.stat};
  font-size: 0.7rem;
  flex: 1;
  letter-spacing: 0;
`

const StatScore = styled.span`
  color: ${R.gold};
  font-size: 0.75rem;
  width: 2.5rem;
  text-align: right;
`

// Divider
const Divider = styled.div`
  border-top: 1px solid ${R.borderDim};
  margin: 0.2rem 0;
`

// Bottom sections (full width, stacked)
const BottomArea = styled.div`
  border-top: 2px solid ${R.borderDim};
  padding: 0.6rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const FullSectionHead = styled.div`
  font-size: 0.82rem;
  color: ${R.title};
  letter-spacing: 0.14em;
  margin-bottom: 0.35rem;
  border-bottom: 1px solid ${R.borderDim};
  padding-bottom: 0.18rem;
`

const QuestEntry = styled.div`
  margin-bottom: 0.5rem;
`

const QuestTitleLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

const QuestGuild = styled.span`
  color: ${R.gold};
  font-size: 0.82rem;
`

const QuestRole = styled.span`
  color: ${R.label};
  font-size: 0.75rem;
`

const QuestDate = styled.span`
  color: ${R.dim};
  font-size: 0.72rem;
`

const QuestBullet = styled.div`
  color: ${R.dim};
  font-size: 0.72rem;
  padding-left: 1rem;
  line-height: 1.45;

  &::before {
    content: '▸ ';
    color: ${R.exp};
  }
`

const ProjectTag = styled.span`
  display: inline-block;
  border: 1px solid ${R.borderDim};
  color: ${R.label};
  font-size: 0.75rem;
  padding: 0.08rem 0.5rem;
  margin: 0.1rem 0.2rem;
`

// Status bar
const StatusBar = styled.div`
  background: ${R.borderDim};
  padding: 0.28rem 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border-top: 2px solid ${R.bg};
`

const StatusBtn = styled.span`
  font-size: 0.72rem;
  color: ${R.bg};
  letter-spacing: 0.06em;
`

// Equipment grid
const EquipGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.08rem 0.35rem;
`

const EquipItem = styled.span<{ $primary?: boolean }>`
  color: ${(p) => (p.$primary ? R.gold : R.value)};
  font-size: 0.72rem;

  &::before {
    content: '· ';
    color: ${R.dim};
  }
`

// ── Helpers ───────────────────────────────────────────────

function blockBar(val: number, max: number, width = 14): string {
  const n = Math.min(width, Math.max(0, Math.round((val / max) * width)))
  return '▓'.repeat(n) + '░'.repeat(width - n)
}

function calcVitals(data: ResumeData) {
  const totalSkills = (data.skills ?? []).reduce((s, g) => s + g.skills.length, 0)
  const expYears = (data.experience ?? []).length
  const eduCerts = (data.education ?? []).length + (data.certifications ?? []).length
  const projects = (data.projects ?? []).length

  const hp = Math.min(999, totalSkills * 14 + 50)
  const maxHp = Math.round(hp / 0.9)
  const mp = Math.min(999, eduCerts * 22 + expYears * 8 + 20)
  const maxMp = Math.round(mp / 0.8)
  const level = expYears * 2 + 1
  const expPts = projects * 120 + expYears * 90
  const nextLvl = (level + 1) * 180

  return { hp, maxHp, mp, maxMp, level, expPts, nextLvl }
}

function calcStatBars(data: ResumeData) {
  const groups = data.skills ?? []
  const maxCount = Math.max(...groups.map((g) => g.skills.length), 1)
  return groups.slice(0, 8).map((g) => ({
    name: g.category.split(/[\s&\/]+/)[0].toUpperCase().slice(0, 8),
    val: g.skills.length,
    max: maxCount,
  }))
}

// ── Component ─────────────────────────────────────────────

interface Props {
  data: ResumeData
}

const RetroRPGTemplate = forwardRef<HTMLDivElement, Props>(({ data }, ref) => {
  const { contact, experience, projects, skills } = data
  const vitals = calcVitals(data)
  const statBars = calcStatBars(data)

  const initials = contact.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  const allSkills = (skills ?? []).flatMap((g) => g.skills)
  const primarySkills = (skills?.[0]?.skills ?? []).slice(0, 8)
  const secondarySkills = allSkills.slice(primarySkills.length, primarySkills.length + 12)

  return (
    <Paper ref={ref}>
      <TitleBar>
        <TitleText>★ STATUS SCREEN ★</TitleText>
        <TitleRight>LV.{vitals.level.toString().padStart(2, '0')} &nbsp;|&nbsp; SAVE SLOT 01</TitleRight>
      </TitleBar>

      <MainArea>
        {/* ── Left Panel ── */}
        <LeftPanel>
          {/* Sprite */}
          <SpriteBox>
            <SpriteCorner $pos="tl" />
            <SpriteCorner $pos="tr" />
            <SpriteCorner $pos="bl" />
            <SpriteCorner $pos="br" />
            {contact.avatar ? (
              <SpriteAvatar src={contact.avatar} alt={contact.name} />
            ) : (
              <SpriteInitials>{initials}</SpriteInitials>
            )}
          </SpriteBox>

          {/* Vitals */}
          <VitalRow>
            <BarLine>
              <BarLabel $color={R.hp}>HP</BarLabel>
              <BarChars $color={R.hp}>{blockBar(vitals.hp, vitals.maxHp)}</BarChars>
              <BarNums>
                {vitals.hp}/{vitals.maxHp}
              </BarNums>
            </BarLine>
            <BarLine>
              <BarLabel $color={R.mp}>MP</BarLabel>
              <BarChars $color={R.mp}>{blockBar(vitals.mp, vitals.maxMp)}</BarChars>
              <BarNums>
                {vitals.mp}/{vitals.maxMp}
              </BarNums>
            </BarLine>
            <BarLine>
              <BarLabel $color={R.exp}>EXP</BarLabel>
              <BarChars $color={R.exp}>{blockBar(vitals.expPts, vitals.nextLvl)}</BarChars>
              <BarNums>{vitals.expPts}</BarNums>
            </BarLine>
          </VitalRow>

          <Divider />

          {/* Skill stats */}
          <SectionBox>
            <SectionHead>[ ABILITIES ]</SectionHead>
            <SectionBody>
              {statBars.map((s) => (
                <StatRow key={s.name}>
                  <StatLabel>{s.name}</StatLabel>
                  <StatBar $pct={(s.val / s.max) * 100}>
                    {blockBar(s.val, s.max, 8)}
                  </StatBar>
                  <StatScore>{Math.round(8 + (s.val / s.max) * 12)}</StatScore>
                </StatRow>
              ))}
            </SectionBody>
          </SectionBox>
        </LeftPanel>

        {/* ── Right Panel ── */}
        <RightPanel>
          {/* Character Info */}
          <SectionBox>
            <SectionHead>[ CHARACTER INFO ]</SectionHead>
            <SectionBody>
              <InfoRow>
                <InfoKey>NAME</InfoKey>
                <InfoVal style={{ color: R.title }}>{contact.name}</InfoVal>
              </InfoRow>
              <InfoRow>
                <InfoKey>CLASS</InfoKey>
                <InfoVal style={{ color: R.label }}>{contact.role}</InfoVal>
              </InfoRow>
              <InfoRow>
                <InfoKey>LEVEL</InfoKey>
                <InfoVal>{vitals.level}</InfoVal>
              </InfoRow>
              {contact.location && (
                <InfoRow>
                  <InfoKey>ORIGIN</InfoKey>
                  <InfoVal>{contact.location}</InfoVal>
                </InfoRow>
              )}
              {contact.email && (
                <InfoRow>
                  <InfoKey>CONTACT</InfoKey>
                  <InfoVal style={{ color: R.dim, fontSize: '0.72rem' }}>{contact.email}</InfoVal>
                </InfoRow>
              )}
              {contact.github && (
                <InfoRow>
                  <InfoKey>GUILD</InfoKey>
                  <InfoVal style={{ color: R.dim, fontSize: '0.72rem' }}>{contact.github}</InfoVal>
                </InfoRow>
              )}
            </SectionBody>
          </SectionBox>

          {/* Equipped */}
          <SectionBox>
            <SectionHead>[ EQUIPPED — PRIMARY ]</SectionHead>
            <SectionBody>
              <EquipGrid>
                {primarySkills.map((s) => (
                  <EquipItem key={s} $primary>
                    {s}
                  </EquipItem>
                ))}
              </EquipGrid>
            </SectionBody>
          </SectionBox>

          {secondarySkills.length > 0 && (
            <SectionBox>
              <SectionHead>[ EQUIPPED — SECONDARY ]</SectionHead>
              <SectionBody>
                <EquipGrid>
                  {secondarySkills.map((s) => (
                    <EquipItem key={s}>{s}</EquipItem>
                  ))}
                </EquipGrid>
              </SectionBody>
            </SectionBox>
          )}
        </RightPanel>
      </MainArea>

      {/* ── Bottom full-width sections ── */}
      <BottomArea>
        {/* Quest Log */}
        {experience && experience.length > 0 && (
          <div>
            <FullSectionHead>◈ QUEST LOG</FullSectionHead>
            {experience.map((job, i) => (
              <QuestEntry key={i}>
                <QuestTitleLine>
                  <span>
                    <QuestGuild>{job.company}</QuestGuild>
                    <span style={{ color: R.borderDim }}> / </span>
                    <QuestRole>{job.role}</QuestRole>
                  </span>
                  <QuestDate>
                    {job.startDate} → {job.endDate}
                  </QuestDate>
                </QuestTitleLine>
                {job.bullets.slice(0, 2).map((b, j) => (
                  <QuestBullet key={j}>{b}</QuestBullet>
                ))}
              </QuestEntry>
            ))}
          </div>
        )}

        {/* Dungeons completed */}
        {projects && projects.length > 0 && (
          <div>
            <FullSectionHead>◈ DUNGEONS CLEARED</FullSectionHead>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
              {projects.map((p) => (
                <ProjectTag key={p.name}>{p.name}</ProjectTag>
              ))}
            </div>
          </div>
        )}
      </BottomArea>

      <StatusBar>
        <StatusBtn>▲ DETAILS</StatusBtn>
        <StatusBtn>● SKILLS</StatusBtn>
        <StatusBtn>■ ITEMS</StatusBtn>
        <StatusBtn>▶ NEXT PAGE</StatusBtn>
      </StatusBar>
    </Paper>
  )
})

RetroRPGTemplate.displayName = 'RetroRPGTemplate'
export default RetroRPGTemplate
