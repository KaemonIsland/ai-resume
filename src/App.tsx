import { useRef, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { THEMES, type ThemeId } from './themes'
import placeholderData from './data/placeholder.json'
import type { ResumeData, SectionLayout } from './types/resume'
import { createDefaultSectionLayout } from './types/resume'
import { TemplateContext, type TemplateId } from './contexts/TemplateContext'
import { useLocalStorage } from './hooks/useLocalStorage'
import Toolbar from './components/Toolbar/Toolbar'
import Resume from './components/Resume/Resume'
import styled from 'styled-components'
import './styles/global.scss'

const AppShell = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.appBg};
  display: flex;
  flex-direction: column;
`

const Content = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2.5rem 2rem 0;
  overflow-x: auto;
`

export default function App() {
  const [resumeData, setResumeData] = useState<ResumeData>(placeholderData as ResumeData)
  const [sectionLayout, setSectionLayout] = useLocalStorage<SectionLayout>(
    'resume-layout',
    createDefaultSectionLayout(placeholderData as ResumeData),
  )
  const [themeId, setThemeId] = useLocalStorage<ThemeId>('resume-theme', 'light')
  const [templateId, setTemplateId] = useLocalStorage<TemplateId>(
    'resume-template',
    'classic',
  )
  const resumeRef = useRef<HTMLDivElement>(null)
  const resume2Ref = useRef<HTMLDivElement>(null)

  const handleJsonUpload = (data: ResumeData) => {
    setResumeData(data)
    setSectionLayout(createDefaultSectionLayout(data))
  }

  const handleSectionMove = (
    type: 'summary' | 'experience' | 'project',
    index?: number,
  ) => {
    setSectionLayout((prev) => {
      if (type === 'summary') {
        return { ...prev, summary: prev.summary === 1 ? 2 : 1 }
      }
      if (type === 'experience' && index !== undefined) {
        const pages = [...prev.experiencePages]
        pages[index] = pages[index] === 1 ? 2 : 1
        return { ...prev, experiencePages: pages }
      }
      if (type === 'project' && index !== undefined) {
        const pages = [...prev.projectPages]
        pages[index] = pages[index] === 1 ? 2 : 1
        return { ...prev, projectPages: pages }
      }
      return prev
    })
  }

  return (
    <ThemeProvider theme={THEMES[themeId]}>
      <TemplateContext.Provider value={templateId}>
        <AppShell>
          <Toolbar
            resumeRef={resumeRef}
            resume2Ref={resume2Ref}
            onJsonUpload={handleJsonUpload}
            filename={resumeData.meta.title}
            themeId={themeId}
            onThemeChange={setThemeId}
            templateId={templateId}
            onTemplateChange={setTemplateId}
          />
          <Content>
            <Resume
              ref={resumeRef}
              data={resumeData}
              sectionLayout={sectionLayout}
              onSectionMove={handleSectionMove}
              page2Ref={resume2Ref}
            />
          </Content>
        </AppShell>
      </TemplateContext.Provider>
    </ThemeProvider>
  )
}
