import { forwardRef } from 'react'
import styled, { keyframes } from 'styled-components'
import type { ResumeData } from '../../../types/resume'

// ── Dracula palette ────────────────────────────────────────
const C = {
  bg: '#282a36',
  surface: '#1e1f29',
  titlebar: '#21222c',
  comment: '#8b9fd4', // brightened from #6272a4 → 5.8:1 on dark bg (WCAG AA)
  fg: '#f8f8f2',
  cyan: '#8be9fd',
  green: '#50fa7b',
  orange: '#ffb86c',
  pink: '#ff79c6',
  purple: '#bd93f9',
  red: '#ff5555',
  yellow: '#f1fa8c',
}

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`

const Paper = styled.div`
  position: relative;
  width: 794px;
  min-height: 1122px;
  background: ${C.bg};
  color: ${C.fg};
  font-family: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', 'Courier New', monospace;
  font-size: 0.67rem;
  line-height: 1.72;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.7), 0 0 0 1px #44475a;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
`

const TitleBar = styled.div`
  height: 34px;
  background: ${C.titlebar};
  display: flex;
  align-items: center;
  padding: 0 1rem;
  flex-shrink: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
`

const Lights = styled.div`
  display: flex;
  gap: 6px;
  flex-shrink: 0;
`

const Light = styled.div<{ $c: string }>`
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: ${(p) => p.$c};
`

const WinTitle = styled.div`
  flex: 1;
  text-align: center;
  font-size: 0.6rem;
  color: ${C.comment};
  letter-spacing: 0.06em;
`

const Body = styled.div`
  padding: 1.25rem 1.75rem 1.75rem;
  flex: 1;
`

const Block = styled.div`
  margin-bottom: 1rem;
`

const HR = styled.div`
  border-top: 1px solid rgba(98, 114, 164, 0.28);
  margin: 0.6rem 0 0.8rem;
`

const PromptRow = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0;
  margin-bottom: 0.15rem;
`

const G = styled.span`
  color: ${C.green};
  font-weight: 700;
`
const Cy = styled.span`
  color: ${C.cyan};
`
const Pu = styled.span`
  color: ${C.purple};
`
const Ye = styled.span`
  color: ${C.yellow};
`
const Or = styled.span`
  color: ${C.orange};
`
const Pi = styled.span`
  color: ${C.pink};
`
const Di = styled.span`
  color: ${C.comment};
`
const Wh = styled.span`
  color: ${C.fg};
`

const NameBox = styled.div`
  display: inline-block;
  border: 1px solid ${C.comment};
  padding: 0.45rem 1.25rem;
  margin: 0.35rem 0;
  color: ${C.cyan};
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.06em;
`

const EnvLine = styled.div`
  display: flex;
  gap: 0;
`

const EnvKey = styled.span`
  color: ${C.yellow};
  font-weight: 700;
  min-width: 84px;
  display: inline-block;
`

const FileLine = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.55rem;
  margin-bottom: 0.12rem;
`

const FilePerms = styled.span`
  color: ${C.comment};
  flex-shrink: 0;
`

const FileDir = styled.span`
  color: ${C.cyan};
  font-weight: 700;
  flex-shrink: 0;
  min-width: 8rem;
`

const FileSkills = styled.span`
  color: ${C.green};
`

const JobEntry = styled.div`
  margin-bottom: 0.75rem;
  padding-bottom: 0.25rem;
`

const JobHead = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  margin-bottom: 0.1rem;
`

const Bullet = styled.div<{ $last?: boolean }>`
  padding-left: 1.15rem;
  color: ${C.fg};
  line-height: 1.65;
  &::before {
    content: '${(p) => (p.$last ? '└─' : '├─')} ';
    color: ${C.comment};
  }
`

const CommitLine = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.55rem;
  flex-wrap: wrap;
`

const Cursor = styled.span`
  display: inline-block;
  width: 7px;
  height: 0.82em;
  background: ${C.green};
  vertical-align: text-bottom;
  animation: ${blink} 1.2s step-end infinite;
`

// ── Helpers ───────────────────────────────────────────────

function shortHash(str: string): string {
  let h = 0
  for (const c of str) h = ((h << 5) - h + c.charCodeAt(0)) | 0
  return Math.abs(h).toString(16).padStart(7, '0').slice(0, 7)
}

interface PromptProps {
  user: string
  dir?: string
  cmd: string
}

function Prompt({ user, dir = '~', cmd }: PromptProps) {
  return (
    <PromptRow>
      <G>{user}</G>
      <Di>@</Di>
      <Cy>resume</Cy>
      <Di>:</Di>
      <Pu>{dir}</Pu>
      <Ye>$</Ye>
      <Wh>&nbsp;{cmd}</Wh>
    </PromptRow>
  )
}

// ── Component ─────────────────────────────────────────────

interface Props {
  data: ResumeData
}

const TerminalTemplate = forwardRef<HTMLDivElement, Props>(({ data }, ref) => {
  const { contact, summary, experience, projects, skills, education, certifications } = data
  const user = contact.name.split(' ')[0].toLowerCase()

  return (
    <Paper ref={ref}>
      <TitleBar>
        <Lights>
          <Light $c="#ff5f57" />
          <Light $c="#febc2e" />
          <Light $c="#28c840" />
        </Lights>
        <WinTitle>
          {user}@resume — zsh — 110×38
        </WinTitle>
      </TitleBar>

      <Body>
        {/* whoami */}
        <Block>
          <Prompt user={user} cmd="whoami" />
          <NameBox>
            {contact.name}  ·  {contact.role}
          </NameBox>
        </Block>

        {/* contact env vars */}
        <Block>
          <Prompt user={user} cmd="env | grep CONTACT" />
          {contact.email && (
            <EnvLine>
              <EnvKey>EMAIL</EnvKey>
              <Di>=</Di>
              <Wh>{contact.email}</Wh>
            </EnvLine>
          )}
          {contact.phone && (
            <EnvLine>
              <EnvKey>PHONE</EnvKey>
              <Di>=</Di>
              <Wh>{contact.phone}</Wh>
            </EnvLine>
          )}
          {contact.location && (
            <EnvLine>
              <EnvKey>LOCATION</EnvKey>
              <Di>=</Di>
              <Wh>{contact.location}</Wh>
            </EnvLine>
          )}
          {contact.github && (
            <EnvLine>
              <EnvKey>GITHUB</EnvKey>
              <Di>=</Di>
              <Cy>{contact.github}</Cy>
            </EnvLine>
          )}
          {contact.linkedin && (
            <EnvLine>
              <EnvKey>LINKEDIN</EnvKey>
              <Di>=</Di>
              <Cy>{contact.linkedin}</Cy>
            </EnvLine>
          )}
          {contact.website && (
            <EnvLine>
              <EnvKey>WEBSITE</EnvKey>
              <Di>=</Di>
              <Cy>{contact.website}</Cy>
            </EnvLine>
          )}
        </Block>

        {/* README / summary */}
        {summary && (
          <Block>
            <Prompt user={user} cmd="cat README.md" />
            <div style={{ color: C.fg, maxWidth: '100%' }}>{summary}</div>
          </Block>
        )}

        <HR />

        {/* skills as ls */}
        {skills && skills.length > 0 && (
          <Block>
            <Prompt user={user} dir="~/skills" cmd="ls -la" />
            {skills.map((group) => (
              <FileLine key={group.category}>
                <FilePerms>drwxr-xr-x</FilePerms>
                <FileDir>{group.category}/</FileDir>
                <FileSkills>{group.skills.join('  ')}</FileSkills>
              </FileLine>
            ))}
          </Block>
        )}

        <HR />

        {/* experience as cat log */}
        {experience && experience.length > 0 && (
          <Block>
            <Prompt user={user} cmd="cat experience.log" />
            {experience.map((job, i) => (
              <JobEntry key={i}>
                <JobHead>
                  <Or>▶&nbsp;&nbsp;{job.company}</Or>
                  <Pi>{job.role}</Pi>
                  <Di style={{ marginLeft: 'auto' }}>
                    {job.startDate} → {job.endDate}
                  </Di>
                </JobHead>
                {job.bullets.map((b, j) => (
                  <Bullet key={j} $last={j === job.bullets.length - 1}>
                    {b}
                  </Bullet>
                ))}
              </JobEntry>
            ))}
          </Block>
        )}

        {/* projects as git log */}
        {projects && projects.length > 0 && (
          <Block>
            <Prompt user={user} dir="~/projects" cmd="git log --oneline --all" />
            {projects.map((p) => (
              <CommitLine key={p.name}>
                <Ye>{shortHash(p.name)}</Ye>
                <Wh>{p.name}</Wh>
                {p.description && <Di>—&nbsp;{p.description}</Di>}
                <Pu>({p.tech.join(', ')})</Pu>
              </CommitLine>
            ))}
          </Block>
        )}

        {/* education */}
        {education && education.length > 0 && (
          <Block>
            <Prompt user={user} cmd="cat education.json | jq '.[]'" />
            {education.map((edu, i) => (
              <div key={i}>
                <Cy>{edu.institution}</Cy>
                <Di> — </Di>
                <Wh>
                  {edu.degree}
                  {edu.field ? `, ${edu.field}` : ''}
                </Wh>
                <Ye>
                  &nbsp;[{edu.startYear}–{edu.endYear}]
                </Ye>
              </div>
            ))}
          </Block>
        )}

        {/* certifications */}
        {certifications && certifications.length > 0 && (
          <Block>
            <Prompt user={user} cmd="ls ~/certs/" />
            {certifications.map((cert, i) => (
              <div key={i}>
                <G>✓&nbsp;</G>
                <Wh>{cert.name}</Wh>
                {cert.issuer && <Di>&nbsp;·&nbsp;{cert.issuer}</Di>}
                {cert.year && <Ye>&nbsp;[{cert.year}]</Ye>}
              </div>
            ))}
          </Block>
        )}

        {/* final prompt with cursor */}
        <PromptRow>
          <G>{user}</G>
          <Di>@</Di>
          <Cy>resume</Cy>
          <Di>:</Di>
          <Pu>~/</Pu>
          <Ye>$</Ye>
          <span>&nbsp;</span>
          <Cursor />
        </PromptRow>
      </Body>
    </Paper>
  )
})

TerminalTemplate.displayName = 'TerminalTemplate'
export default TerminalTemplate
