import { useRef, useState } from 'react'
import type { ResumeData } from '../../types/resume'
import { exportToPDF } from '../../utils/pdf'
import { THEMES, THEME_LABELS, type ThemeId } from '../../themes'
import { TEMPLATE_LABELS, type TemplateId } from '../../contexts/TemplateContext'
import { FiUpload, FiDownload, FiFileText } from 'react-icons/fi'
import {
  ToolbarContainer,
  ToolbarBrand,
  BrandIcon,
  BrandText,
  BrandDot,
  ToolbarRight,
  FilenameChip,
  ToolbarActions,
  HiddenInput,
  UploadButton,
  ExportButton,
  PickerGroup,
  PickerLabel,
  PickerSelect,
  PickerDivider,
} from './Toolbar.styles'

interface ToolbarProps {
  resumeRef: React.RefObject<HTMLDivElement | null>
  resume2Ref: React.RefObject<HTMLDivElement | null>
  onJsonUpload: (data: ResumeData) => void
  filename: string
  themeId: ThemeId
  onThemeChange: (id: ThemeId) => void
  templateId: TemplateId
  onTemplateChange: (id: TemplateId) => void
}

export default function Toolbar({
  resumeRef,
  resume2Ref,
  onJsonUpload,
  filename,
  themeId,
  onThemeChange,
  templateId,
  onTemplateChange,
}: ToolbarProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [exporting, setExporting] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target?.result as string) as ResumeData
        onJsonUpload(data)
      } catch {
        alert('Invalid JSON file. Please upload a valid resume JSON.')
      }
    }
    reader.readAsText(file)
    e.target.value = ''
  }

  const handleExport = async () => {
    if (!resumeRef.current || exporting) return

    setExporting(true)
    try {
      const safeFilename = filename
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '')

      const elements: HTMLElement[] = [resumeRef.current]
      if (resume2Ref.current) elements.push(resume2Ref.current)

      await exportToPDF(elements, `${safeFilename}.pdf`)
    } finally {
      setExporting(false)
    }
  }

  return (
    <ToolbarContainer>
      <ToolbarBrand>
        <BrandIcon>
          <FiFileText size={17} />
        </BrandIcon>
        <BrandText>
          AI Resume Builder<BrandDot>.</BrandDot>
        </BrandText>
      </ToolbarBrand>

      <ToolbarRight>
        <FilenameChip>{filename}</FilenameChip>

        <PickerGroup>
          <PickerLabel htmlFor="template-picker">Template</PickerLabel>
          <PickerSelect
            id="template-picker"
            value={templateId}
            onChange={(e) => onTemplateChange(e.target.value as TemplateId)}
          >
            {(Object.keys(TEMPLATE_LABELS) as TemplateId[]).map((id) => (
              <option key={id} value={id}>
                {TEMPLATE_LABELS[id]}
              </option>
            ))}
          </PickerSelect>
        </PickerGroup>

        <PickerGroup>
          <PickerLabel htmlFor="theme-picker">Color</PickerLabel>
          <PickerSelect
            id="theme-picker"
            value={themeId}
            onChange={(e) => onThemeChange(e.target.value as ThemeId)}
          >
            {(Object.keys(THEMES) as ThemeId[]).map((id) => (
              <option key={id} value={id}>
                {THEME_LABELS[id]}
              </option>
            ))}
          </PickerSelect>
        </PickerGroup>

        <PickerDivider />

        <ToolbarActions>
          <HiddenInput
            ref={fileInputRef}
            type="file"
            accept=".json,application/json"
            onChange={handleFileChange}
          />
          <UploadButton onClick={() => fileInputRef.current?.click()}>
            <FiUpload size={13} />
            Load JSON
          </UploadButton>

          <ExportButton onClick={handleExport} disabled={exporting}>
            <FiDownload size={13} />
            {exporting ? 'Exporting…' : 'Export PDF'}
          </ExportButton>
        </ToolbarActions>
      </ToolbarRight>
    </ToolbarContainer>
  )
}
