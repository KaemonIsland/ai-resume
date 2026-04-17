import styled from 'styled-components'

export const ToolbarContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 56px;
  background: ${({ theme }) => theme.colors.toolbarBg};
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.06), 0 2px 8px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 100;
  flex-shrink: 0;
`

export const ToolbarBrand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: ${({ theme }) => theme.colors.toolbarText};
`

export const BrandIcon = styled.span`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.sidebarAccent};
  opacity: 0.9;
`

export const BrandText = styled.span`
  font-size: 0.88rem;
  font-weight: 600;
  letter-spacing: 0.01em;
`

export const BrandDot = styled.span`
  font-size: 0.88rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.sidebarAccent};
  margin-left: 2px;
`

export const ToolbarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

export const FilenameChip = styled.span`
  font-size: 0.7rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.sidebarMuted};
  letter-spacing: 0.02em;
  opacity: 0.75;
  max-width: 240px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const ToolbarActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`

export const HiddenInput = styled.input`
  display: none;
`

export const UploadButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.38rem;
  padding: 0.42rem 1rem;
  font-size: 0.76rem;
  font-weight: 500;
  border-radius: ${({ theme }) => theme.radius.md};
  background: rgba(255, 255, 255, 0.08);
  color: ${({ theme }) => theme.colors.toolbarText};
  border: 1px solid rgba(255, 255, 255, 0.16);
  transition: background 0.15s ease, border-color 0.15s ease;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.14);
    border-color: rgba(255, 255, 255, 0.28);
  }
`

export const ExportButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.38rem;
  padding: 0.42rem 1.1rem;
  font-size: 0.76rem;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.buttonBg};
  color: ${({ theme }) => theme.colors.buttonText};
  border: 1px solid transparent;
  box-shadow: ${({ theme }) => theme.shadows.button};
  transition: background 0.15s ease, transform 0.12s ease, box-shadow 0.15s ease;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.buttonHover};
    transform: translateY(-1px);
    box-shadow: 0 4px 14px rgba(37, 99, 235, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`

export const PickerGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`

export const PickerLabel = styled.label`
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.sidebarMuted};
  opacity: 0.8;
  white-space: nowrap;
`

export const PickerSelect = styled.select`
  font-size: 0.72rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.toolbarText};
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 0.3rem 0.6rem;
  cursor: pointer;
  outline: none;
  transition: border-color 0.15s ease, background 0.15s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.13);
    border-color: rgba(255, 255, 255, 0.28);
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.sidebarAccent};
  }

  option {
    background: ${({ theme }) => theme.colors.toolbarBg};
    color: ${({ theme }) => theme.colors.toolbarText};
  }
`

export const PickerDivider = styled.span`
  width: 1px;
  height: 24px;
  background: rgba(255, 255, 255, 0.12);
  flex-shrink: 0;
`

