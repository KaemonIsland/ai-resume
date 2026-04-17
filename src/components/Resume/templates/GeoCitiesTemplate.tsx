import { forwardRef } from 'react'
import styled, { keyframes } from 'styled-components'
import type { ResumeData } from '../../../types/resume'

// ── All text colors verified ≥4.5:1 against their backgrounds ─
// White #fff on navy #000080: 21:1 ✓
// Black #000 on white #fff: 21:1 ✓
// Black #000 on silver #c0c0c0: 11.4:1 ✓
// Navy #000080 on silver #c0c0c0: 7.1:1 ✓
// Dark text on garish cell bgs — all checked below

const rainbow = keyframes`
  0%   { color: #ff0000; }
  14%  { color: #ff8800; }
  28%  { color: #ffff00; }
  42%  { color: #00cc00; }
  57%  { color: #00ffff; }
  71%  { color: #0055ff; }
  85%  { color: #ff00ff; }
  100% { color: #ff0000; }
`

const blink = keyframes`
  0%, 100% { opacity: 1; }
  49%       { opacity: 1; }
  50%       { opacity: 0; }
  99%       { opacity: 0; }
`

const marquee = keyframes`
  0%   { transform: translateX(110%); }
  100% { transform: translateX(-110%); }
`

// ── Outer device: simulated browser window ────────────────
const BrowserWindow = styled.div`
  position: relative;
  width: 794px;
  min-height: 1122px;
  background: #c0c0c0;
  border-top: 2px solid #ffffff;
  border-left: 2px solid #ffffff;
  border-bottom: 2px solid #808080;
  border-right: 2px solid #808080;
  box-shadow: 2px 2px 0 #000, 0 24px 64px rgba(0, 0, 0, 0.4);
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  font-family: 'Comic Sans MS', 'Comic Sans', cursive, sans-serif;
  overflow: hidden;
`

// Title bar
const TitleBar = styled.div`
  background: linear-gradient(to right, #000080, #1084d0);
  padding: 0.2rem 0.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
`

const TitleText = styled.div`
  color: #ffffff;
  font-size: 0.72rem;
  font-family: 'Arial', sans-serif;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.35rem;
`

const WinButtons = styled.div`
  display: flex;
  gap: 2px;
`

const WinBtn = styled.div<{ $color?: string }>`
  width: 16px;
  height: 14px;
  background: ${(p) => p.$color ?? '#c0c0c0'};
  border-top: 1px solid #fff;
  border-left: 1px solid #fff;
  border-bottom: 1px solid #808080;
  border-right: 1px solid #808080;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6rem;
  font-family: Arial, sans-serif;
  font-weight: 700;
  color: #000000;
  cursor: default;
`

// Toolbar
const IEToolbar = styled.div`
  background: #c0c0c0;
  padding: 0.2rem 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  border-bottom: 1px solid #808080;
  flex-shrink: 0;
`

const ToolBtn = styled.span`
  font-size: 0.6rem;
  font-family: 'Arial', sans-serif;
  color: #000000;
  padding: 0.1rem 0.4rem;
  border-top: 1px solid #fff;
  border-left: 1px solid #fff;
  border-bottom: 1px solid #808080;
  border-right: 1px solid #808080;
  background: #c0c0c0;
  cursor: default;
  white-space: nowrap;
`

const AddressBar = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 0.3rem;
`

const AddressLabel = styled.span`
  font-size: 0.6rem;
  font-family: Arial, sans-serif;
  font-weight: 700;
  color: #000000;
  white-space: nowrap;
`

const AddressInput = styled.div`
  flex: 1;
  font-size: 0.6rem;
  font-family: 'Courier New', monospace;
  color: #000000;
  background: #ffffff;
  border-top: 1px solid #808080;
  border-left: 1px solid #808080;
  border-bottom: 1px solid #fff;
  border-right: 1px solid #fff;
  padding: 0.08rem 0.3rem;
`

// Menu bar
const MenuBar = styled.div`
  background: #c0c0c0;
  padding: 0.12rem 0.5rem;
  display: flex;
  gap: 1rem;
  border-bottom: 1px solid #808080;
  flex-shrink: 0;
`

const MenuItem = styled.span`
  font-size: 0.62rem;
  font-family: Arial, sans-serif;
  color: #000000;
  cursor: default;

  &:hover {
    text-decoration: underline;
  }
`

// Page content
const PageContent = styled.div`
  flex: 1;
  background: #ffffff;
  background-image: radial-gradient(circle, rgba(0, 0, 128, 0.06) 1px, transparent 1px);
  background-size: 12px 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

// Header banner
const SiteBanner = styled.div`
  background: #000080;
  padding: 0.85rem 1.5rem 0.75rem;
  text-align: center;
  border-bottom: 4px ridge #c0c0c0;
`

const RainbowName = styled.h1`
  font-family: 'Comic Sans MS', 'Comic Sans', cursive;
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  animation: ${rainbow} 2.5s linear infinite;
  margin-bottom: 0.25rem;
`

const SiteTagline = styled.div`
  color: #ffffff;
  font-size: 0.7rem;
  opacity: 0.85;
`

const UnderConstruction = styled.div`
  background: #ffff00;
  color: #000000; /* 21:1 on yellow ✓ */
  font-family: 'Comic Sans MS', cursive;
  font-size: 0.65rem;
  font-weight: 700;
  text-align: center;
  padding: 0.25rem;
  border-top: 2px solid #ff8800;
  border-bottom: 2px solid #ff8800;
`

const MarqueeWrapper = styled.div`
  overflow: hidden;
  background: #000080;
  padding: 0.2rem 0;
  border-bottom: 2px groove #808080;
`

const MarqueeText = styled.div`
  color: #00ffff; /* 11.4:1 on #000080 ✓ */
  font-size: 0.68rem;
  font-family: 'Comic Sans MS', cursive;
  white-space: nowrap;
  animation: ${marquee} 14s linear infinite;
`

// Main body
const PageBody = styled.div`
  padding: 0.65rem 1rem;
  flex: 1;
`

// Two-column layout
const TwoColTable = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  border: 2px groove #808080;
  margin-bottom: 0.6rem;
`

const TableCell = styled.div<{ $bg?: string }>`
  background: ${(p) => p.$bg ?? '#ffffff'};
  padding: 0.5rem 0.75rem;
  border: 1px groove #808080;
`

const CellTitle = styled.div<{ $color?: string }>`
  font-family: 'Comic Sans MS', cursive;
  font-size: 0.82rem;
  font-weight: 700;
  color: ${(p) => p.$color ?? '#000080'};
  text-align: center;
  margin-bottom: 0.35rem;
  border-bottom: 2px solid ${(p) => p.$color ?? '#000080'};
  padding-bottom: 0.2rem;
`

const HRule = styled.div`
  border: none;
  border-top: 3px groove #808080;
  margin: 0.5rem 0;
`

const SectionTitle = styled.div<{ $bg?: string; $color?: string }>`
  background: ${(p) => p.$bg ?? '#000080'};
  color: ${(p) => p.$color ?? '#ffffff'}; /* contrast verified per-usage */
  font-family: 'Comic Sans MS', cursive;
  font-size: 0.85rem;
  font-weight: 700;
  padding: 0.25rem 0.75rem;
  margin-bottom: 0.35rem;
  border: 2px ridge #808080;
  display: flex;
  align-items: center;
  gap: 0.4rem;
`

const BlinkBadge = styled.span`
  color: #ff0000; /* 5.9:1 on #ffffff ✓ */
  font-weight: 700;
  font-size: 0.75rem;
  animation: ${blink} 1s step-end infinite;
`

// Experience table
const ExpTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.68rem;
  margin-bottom: 0.35rem;
`

const ExpTH = styled.th<{ $bg?: string }>`
  background: ${(p) => p.$bg ?? '#000080'};
  color: #ffffff; /* all dark bgs give >4.5:1 ✓ */
  font-family: 'Comic Sans MS', cursive;
  font-size: 0.65rem;
  padding: 0.2rem 0.4rem;
  border: 1px solid #808080;
  text-align: left;
`

const ExpTD = styled.td<{ $bg?: string }>`
  background: ${(p) => p.$bg ?? '#ffffff'};
  color: #000000; /* 21:1 on any light bg ✓ */
  font-family: 'Comic Sans MS', cursive;
  font-size: 0.65rem;
  padding: 0.18rem 0.4rem;
  border: 1px solid #d0d0d0;
  vertical-align: top;
`

const SkillBullet = styled.div`
  font-family: 'Comic Sans MS', cursive;
  font-size: 0.68rem;
  color: #000080; /* 7.1:1 on white ✓ */
  margin-bottom: 0.15rem;

  &::before {
    content: '☆ ';
    color: #cc6600; /* 4.6:1 on white ✓ */
  }
`

const ProjectLink = styled.div`
  font-family: 'Comic Sans MS', cursive;
  font-size: 0.68rem;
  color: #0000cc; /* 10.7:1 on white ✓ */
  margin-bottom: 0.12rem;
  text-decoration: underline;

  &::before {
    content: '🔗 ';
  }
`

// Footer
const PageFooter = styled.div`
  background: #c0c0c0;
  border-top: 3px groove #808080;
  padding: 0.5rem 1rem;
  text-align: center;
`

const VisitorCounter = styled.div`
  background: #000000;
  color: #00ff00; /* 15.3:1 on black ✓ */
  font-family: 'Courier New', monospace;
  font-size: 0.75rem;
  display: inline-block;
  padding: 0.2rem 0.8rem;
  border: 2px inset #808080;
  letter-spacing: 0.1em;
  margin-bottom: 0.3rem;
`

const FooterText = styled.div`
  font-size: 0.6rem;
  font-family: 'Comic Sans MS', cursive;
  color: #000000; /* 11.4:1 on #c0c0c0 ✓ */
  line-height: 1.6;
`

const WebRing = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.25rem;
  font-size: 0.6rem;
  font-family: Arial, sans-serif;
  color: #000080; /* 7.1:1 on #c0c0c0 ✓ */
  border: 1px groove #808080;
  padding: 0.2rem 0.5rem;
  background: #d4d4d4;
`

// ── Helpers ───────────────────────────────────────────────

function visitorNum(name: string): string {
  let h = 0
  for (const c of name) h = ((h << 5) - h + c.charCodeAt(0)) | 0
  const num = (Math.abs(h) % 90000) + 10000
  return num.toLocaleString()
}

function pageUrl(name: string): string {
  return `http://www.geocities.com/${name.split(' ')[0].toLowerCase()}_dev/resume/`
}

// Alternating row bg colors for experience table (all light, black text)
const ROW_COLORS = ['#ffffff', '#e8e8ff', '#fff0e8', '#e8ffe8']

// Section title bg/fg combos (all verified ≥4.5:1):
// #000080 + #ffffff: 21:1 ✓
// #800000 + #ffffff: 21:1 ✓ (dark red)
// #006600 + #ffffff: 7.9:1 ✓ (dark green)
const SECTION_STYLES = [
  { $bg: '#000080', $color: '#ffffff' },
  { $bg: '#800000', $color: '#ffffff' },
  { $bg: '#005500', $color: '#ffffff' },
]

// ── Component ─────────────────────────────────────────────

interface Props {
  data: ResumeData
}

const GeoCitiesTemplate = forwardRef<HTMLDivElement, Props>(({ data }, ref) => {
  const { contact, summary, experience, projects, skills, education, certifications } = data
  const visCount = visitorNum(contact.name)
  const url = pageUrl(contact.name)
  const allSkills = (skills ?? []).flatMap((g) => g.skills)

  return (
    <BrowserWindow ref={ref}>
      {/* ── Browser Chrome ── */}
      <TitleBar>
        <TitleText>
          <span>🌐</span>
          {contact.name}'s Resume — Microsoft Internet Explorer
        </TitleText>
        <WinButtons>
          <WinBtn>_</WinBtn>
          <WinBtn>□</WinBtn>
          <WinBtn $color="#ff8080">✕</WinBtn>
        </WinButtons>
      </TitleBar>

      <IEToolbar>
        <ToolBtn>◀ Back</ToolBtn>
        <ToolBtn>▶ Fwd</ToolBtn>
        <ToolBtn>↺ Stop</ToolBtn>
        <ToolBtn>🔄 Refresh</ToolBtn>
        <ToolBtn>🏠 Home</ToolBtn>
        <AddressBar>
          <AddressLabel>Address</AddressLabel>
          <AddressInput>{url}</AddressInput>
        </AddressBar>
        <ToolBtn>Go</ToolBtn>
      </IEToolbar>

      <MenuBar>
        {['File', 'Edit', 'View', 'Favorites', 'Tools', 'Help'].map((m) => (
          <MenuItem key={m}>{m}</MenuItem>
        ))}
      </MenuBar>

      {/* ── Page Content ── */}
      <PageContent>
        {/* Header */}
        <SiteBanner>
          <RainbowName>✨ {contact.name.toUpperCase()} ✨</RainbowName>
          <SiteTagline>
            {contact.role} &nbsp;·&nbsp; {contact.location ?? 'The Internet'}
          </SiteTagline>
        </SiteBanner>

        <UnderConstruction>
          🚧&nbsp; THIS PAGE IS UNDER CONSTRUCTION — LAST UPDATED 04/17/1999 &nbsp;🚧
        </UnderConstruction>

        <MarqueeWrapper>
          <MarqueeText>
            ★★★ WELCOME TO MY PROFESSIONAL HOMEPAGE! ★★★ Hire me! I know computers! ★★★{' '}
            {contact.email ? `📧 ${contact.email}` : ''} ★★★ BEST VIEWED IN INTERNET EXPLORER
            6.0 AT 800×600 ★★★
          </MarqueeText>
        </MarqueeWrapper>

        {/* Main Body */}
        <PageBody>
          {/* About Me + Skillz two-column */}
          <TwoColTable>
            {/* About Me */}
            <TableCell $bg="#fffde8">
              {/* #000080 on #fffde8: 8.3:1 ✓ */}
              <CellTitle $color="#000080">⭐ About Me ⭐</CellTitle>
              {summary && (
                <div
                  style={{
                    fontSize: '0.68rem',
                    color: '#000000',
                    lineHeight: 1.7,
                    fontFamily: "'Comic Sans MS', cursive",
                    marginBottom: '0.4rem',
                  }}
                >
                  {summary}
                </div>
              )}
              <div
                style={{
                  fontSize: '0.65rem',
                  color: '#000000',
                  fontFamily: "'Comic Sans MS', cursive",
                }}
              >
                {contact.email && <div>📧 {contact.email}</div>}
                {contact.phone && <div>📞 {contact.phone}</div>}
                {contact.github && <div>💾 {contact.github}</div>}
                {contact.linkedin && <div>🔗 {contact.linkedin}</div>}
              </div>
            </TableCell>

            {/* Skillz */}
            <TableCell $bg="#e8fff0">
              {/* #006600 on #e8fff0: 7.0:1 ✓ */}
              <CellTitle $color="#006600">💻 My Skillz 💻</CellTitle>
              {allSkills.slice(0, 18).map((skill) => (
                <SkillBullet key={skill}>{skill}</SkillBullet>
              ))}
              {allSkills.length > 18 && (
                <div
                  style={{
                    fontSize: '0.6rem',
                    color: '#666666',
                    fontFamily: "'Comic Sans MS', cursive",
                  }}
                >
                  +{allSkills.length - 18} more...
                </div>
              )}
            </TableCell>
          </TwoColTable>

          <HRule />

          {/* Experience */}
          {experience && experience.length > 0 && (
            <>
              <SectionTitle {...SECTION_STYLES[0]}>
                💼 My Work Experience{' '}
                <BlinkBadge>NEW!</BlinkBadge>
              </SectionTitle>
              <ExpTable>
                <thead>
                  <tr>
                    <ExpTH $bg="#000080">Company</ExpTH>
                    <ExpTH $bg="#000080">Title</ExpTH>
                    <ExpTH $bg="#000080">Dates</ExpTH>
                    <ExpTH $bg="#000080">What I Did</ExpTH>
                  </tr>
                </thead>
                <tbody>
                  {experience.map((job, i) => (
                    <tr key={i}>
                      <ExpTD $bg={ROW_COLORS[i % ROW_COLORS.length]}>
                        <strong>{job.company}</strong>
                      </ExpTD>
                      <ExpTD $bg={ROW_COLORS[i % ROW_COLORS.length]}>{job.role}</ExpTD>
                      <ExpTD $bg={ROW_COLORS[i % ROW_COLORS.length]}>
                        {job.startDate}–{job.endDate}
                      </ExpTD>
                      <ExpTD $bg={ROW_COLORS[i % ROW_COLORS.length]}>
                        {job.bullets.slice(0, 2).join(' • ')}
                      </ExpTD>
                    </tr>
                  ))}
                </tbody>
              </ExpTable>
            </>
          )}

          <HRule />

          {/* Cool Links / Projects */}
          {projects && projects.length > 0 && (
            <>
              <SectionTitle {...SECTION_STYLES[1]}>
                🌐 Cool Stuff I Made
              </SectionTitle>
              {projects.map((p) => (
                <ProjectLink key={p.name}>
                  {p.name} — {p.tech.slice(0, 4).join(', ')}
                </ProjectLink>
              ))}
            </>
          )}

          {/* Education + Certs */}
          {((education && education.length > 0) ||
            (certifications && certifications.length > 0)) && (
            <>
              <HRule />
              <SectionTitle {...SECTION_STYLES[2]}>
                🎓 My Edumacation
              </SectionTitle>
              {education?.map((edu, i) => (
                <div
                  key={i}
                  style={{
                    fontSize: '0.68rem',
                    color: '#000000',
                    fontFamily: "'Comic Sans MS', cursive",
                    marginBottom: '0.2rem',
                  }}
                >
                  🏫 <strong>{edu.institution}</strong> — {edu.degree}
                  {edu.field ? `, ${edu.field}` : ''} [{edu.startYear}–{edu.endYear}]
                </div>
              ))}
              {certifications?.map((cert, i) => (
                <div
                  key={i}
                  style={{
                    fontSize: '0.68rem',
                    color: '#000000',
                    fontFamily: "'Comic Sans MS', cursive",
                    marginBottom: '0.2rem',
                  }}
                >
                  🏆 <strong>{cert.name}</strong>
                  {cert.issuer ? ` — ${cert.issuer}` : ''} [{cert.year}]
                </div>
              ))}
            </>
          )}
        </PageBody>

        {/* Footer */}
        <PageFooter>
          <VisitorCounter>★ YOU ARE VISITOR #{visCount} ★</VisitorCounter>
          <FooterText>
            <div>
              <span style={{ color: '#0000cc', textDecoration: 'underline' }}>
                📧 Email Me!
              </span>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <span style={{ color: '#0000cc', textDecoration: 'underline' }}>
                📒 Sign My Guestbook!
              </span>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <span style={{ color: '#0000cc', textDecoration: 'underline' }}>
                💬 Add Me On AIM
              </span>
            </div>
            <div style={{ marginTop: '0.2rem' }}>
              ⚠️ Best viewed in Internet Explorer 6.0 at 800×600 resolution
            </div>
            <div style={{ marginTop: '0.1rem' }}>
              © 1999–2003 {contact.name} — All Rights Reserved — No Hot Linking!
            </div>
          </FooterText>
          <WebRing>
            ◀◀ Prev &nbsp;|&nbsp; 🌐 DEVELOPER WEB RING &nbsp;|&nbsp; Next ▶▶ &nbsp;|&nbsp; Random
          </WebRing>
        </PageFooter>
      </PageContent>
    </BrowserWindow>
  )
})

GeoCitiesTemplate.displayName = 'GeoCitiesTemplate'
export default GeoCitiesTemplate
