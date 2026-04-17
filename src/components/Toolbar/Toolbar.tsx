import { useRef, useState } from 'react'
import type { ResumeData } from '../../types/resume'
import { exportToPDF } from '../../utils/pdf'
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
} from './Toolbar.styles'

interface ToolbarProps {
  resumeRef: React.RefObject<HTMLDivElement | null>
  resume2Ref: React.RefObject<HTMLDivElement | null>
  onJsonUpload: (data: ResumeData) => void
  filename: string
}

export default function Toolbar({ resumeRef, resume2Ref, onJsonUpload, filename }: ToolbarProps) {
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
