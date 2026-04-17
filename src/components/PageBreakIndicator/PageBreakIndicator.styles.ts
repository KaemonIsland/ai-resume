import styled from 'styled-components'

export const BreakLineWrapper = styled.div<{ $y: number }>`
  position: absolute;
  top: ${({ $y }) => $y}px;
  left: 0;
  right: 0;
  height: 0;
  overflow: visible;
  z-index: 20;
  pointer-events: none;
  user-select: none;
`

export const BreakDash = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0;
  border-top: 1.5px dashed rgba(37, 99, 235, 0.45);
`

export const HandlePill = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.22rem 0.65rem;
  background: #2563eb;
  color: #ffffff;
  border-radius: 9999px;
  font-size: 0.58rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  cursor: ns-resize;
  pointer-events: all;
  white-space: nowrap;
  box-shadow: 0 2px 10px rgba(37, 99, 235, 0.35);
  transition: background 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    background: #1d4ed8;
    box-shadow: 0 3px 14px rgba(37, 99, 235, 0.5);
  }

  svg {
    opacity: 0.85;
    flex-shrink: 0;
  }
`

export const HandleLabel = styled.span`
  opacity: 0.9;
`

export const HandlePos = styled.span`
  opacity: 0.6;
  font-weight: 400;
`

export const ResetBtn = styled.button`
  background: rgba(255, 255, 255, 0.22);
  color: #ffffff;
  border: none;
  border-radius: 3px;
  font-size: 0.55rem;
  font-weight: 600;
  padding: 0.1rem 0.35rem;
  cursor: pointer;
  pointer-events: all;
  transition: background 0.12s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.38);
  }
`
