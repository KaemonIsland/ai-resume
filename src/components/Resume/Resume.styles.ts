import styled, { css } from 'styled-components'
import type { TemplateId } from '../../contexts/TemplateContext'

// Positioned at exactly 1122px — the A4 page boundary at 96dpi.
// data-pdf-ignore keeps it out of the exported PDF.
export const PageCutLine = styled.div`
  position: absolute;
  top: 1122px;
  left: 0;
  right: 0;
  height: 0;
  border-top: 2px dashed rgba(239, 68, 68, 0.55);
  pointer-events: none;
  z-index: 10;

  &::after {
    content: 'Page 1 end';
    position: absolute;
    right: 0.5rem;
    top: -1.25rem;
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    color: rgba(239, 68, 68, 0.75);
    text-transform: uppercase;
    background: rgba(255, 255, 255, 0.85);
    padding: 0.1rem 0.35rem;
    border-radius: 3px;
    pointer-events: none;
  }

  @media print {
    display: none;
  }
`

export const ResumeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 2rem;
`

export const ResumePaper = styled.div<{ $template?: TemplateId }>`
  position: relative;
  display: flex;
  flex-direction: ${({ $template }) =>
    $template === 'minimal' || $template === 'modern' ? 'column' : 'row'};
  width: 794px;
  min-height: 1122px;
  background: ${({ theme }) => theme.colors.mainBg};
  box-shadow: ${({ theme }) => theme.shadows.resume};
  flex-shrink: 0;

  ${({ $template }) =>
    ($template === 'minimal' || $template === 'modern') &&
    css`
      & > main {
        padding: 1.75rem 2.25rem 2rem;
      }
    `}

  @media print {
    box-shadow: none;
    width: 100%;
    min-height: unset;
  }
`
