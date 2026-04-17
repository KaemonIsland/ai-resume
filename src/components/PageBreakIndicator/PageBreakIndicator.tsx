import { useCallback, useRef } from 'react'
import { FiAlignJustify } from 'react-icons/fi'
import {
  BreakLineWrapper,
  BreakDash,
  HandlePill,
  HandleLabel,
  HandlePos,
  ResetBtn,
} from './PageBreakIndicator.styles'

export const A4_HEIGHT_PX = 1122

interface PageBreakIndicatorProps {
  pageBreakY: number
  onBreakChange: (y: number) => void
}

export default function PageBreakIndicator({
  pageBreakY,
  onBreakChange,
}: PageBreakIndicatorProps) {
  const isDragging = useRef(false)
  const dragStartClientY = useRef(0)
  const dragStartBreakY = useRef(0)

  const onMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      isDragging.current = true
      dragStartClientY.current = e.clientY
      dragStartBreakY.current = pageBreakY

      const onMove = (me: MouseEvent) => {
        if (!isDragging.current) return
        const delta = me.clientY - dragStartClientY.current
        const next = Math.max(300, dragStartBreakY.current + delta)
        onBreakChange(Math.round(next))
      }

      const onUp = () => {
        isDragging.current = false
        window.removeEventListener('mousemove', onMove)
        window.removeEventListener('mouseup', onUp)
      }

      window.addEventListener('mousemove', onMove)
      window.addEventListener('mouseup', onUp)
    },
    [pageBreakY, onBreakChange],
  )

  const isDefault = pageBreakY === A4_HEIGHT_PX
  const offset = pageBreakY - A4_HEIGHT_PX
  const offsetLabel =
    offset === 0 ? 'default' : `${offset > 0 ? '+' : ''}${offset}px`

  return (
    // data-pdf-ignore tells the PDF exporter to hide this element before capture
    <BreakLineWrapper $y={pageBreakY} data-pdf-ignore="true">
      <BreakDash />
      <HandlePill onMouseDown={onMouseDown}>
        <FiAlignJustify size={10} />
        <HandleLabel>Page break</HandleLabel>
        <HandlePos>· {offsetLabel}</HandlePos>
        {!isDefault && (
          <ResetBtn
            onMouseDown={(e) => e.stopPropagation()}
            onClick={() => onBreakChange(A4_HEIGHT_PX)}
          >
            Reset
          </ResetBtn>
        )}
      </HandlePill>
    </BreakLineWrapper>
  )
}
