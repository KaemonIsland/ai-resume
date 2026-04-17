import { forwardRef } from 'react'
import type { ResumeData, SectionLayout, SectionMoveHandler } from '../../../types/resume'
import MainContent from '../MainContent/MainContent'
import {
  Page2Paper,
  Page2Header,
  Page2Name,
  Page2Right,
  Page2Role,
  Page2Continued,
} from './Page2.styles'

interface Page2Props {
  data: ResumeData
  sectionLayout: SectionLayout
  onSectionMove: SectionMoveHandler
}

const Page2 = forwardRef<HTMLDivElement | null, Page2Props>(
  ({ data, sectionLayout, onSectionMove }, ref) => {
    return (
      <Page2Paper ref={ref}>
        <Page2Header>
          <Page2Name>{data.contact.name}</Page2Name>
          <Page2Right>
            <Page2Role>{data.contact.role}</Page2Role>
            <Page2Continued>continued</Page2Continued>
          </Page2Right>
        </Page2Header>
        <MainContent
          data={data}
          page={2}
          sectionLayout={sectionLayout}
          onSectionMove={onSectionMove}
        />
      </Page2Paper>
    )
  },
)

Page2.displayName = 'Page2'

export default Page2
