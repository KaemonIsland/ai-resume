import { forwardRef } from 'react'
import type { ResumeData, SectionLayout, SectionMoveHandler } from '../../types/resume'
import Sidebar from './Sidebar/Sidebar'
import MainContent from './MainContent/MainContent'
import Page2 from './Page2/Page2'
import { ResumeWrapper, ResumePaper, PageCutLine } from './Resume.styles'

interface ResumeProps {
  data: ResumeData
  sectionLayout: SectionLayout
  onSectionMove: SectionMoveHandler
  page2Ref: React.RefObject<HTMLDivElement | null>
}

const Resume = forwardRef<HTMLDivElement, ResumeProps>(
  ({ data, sectionLayout, onSectionMove, page2Ref }, ref) => {
    const hasPage2 =
      sectionLayout.summary === 2 ||
      sectionLayout.experiencePages.some((p) => p === 2) ||
      sectionLayout.projectPages.some((p) => p === 2)

    return (
      <ResumeWrapper>
        <ResumePaper ref={ref}>
          <Sidebar data={data} />
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
