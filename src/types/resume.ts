export interface ResumeMeta {
  title: string
  template?: string
}

export interface ResumeContact {
  name: string
  role: string
  email: string
  phone: string
  location: string
  linkedin?: string
  github?: string
  website?: string
  avatar?: string
}

export interface ResumeSkillGroup {
  category: string
  skills: string[]
}

export interface ResumeExperience {
  company: string
  role: string
  location?: string
  startDate: string
  endDate: string
  bullets: string[]
}

export interface ResumeProject {
  name: string
  description?: string
  tech: string[]
  link?: string
  repo?: string
  bullets: string[]
}

export interface ResumeEducation {
  institution: string
  degree: string
  field?: string
  startYear: string
  endYear: string
  gpa?: string
  honors?: string[]
}

export interface ResumeCertification {
  name: string
  issuer?: string
  year: string
  link?: string
}

export interface ResumeData {
  meta: ResumeMeta
  contact: ResumeContact
  summary?: string
  skills?: ResumeSkillGroup[]
  experience?: ResumeExperience[]
  projects?: ResumeProject[]
  education?: ResumeEducation[]
  certifications?: ResumeCertification[]
}

export type PageNumber = 1 | 2

export type SectionMoveHandler = (
  type: 'summary' | 'experience' | 'project',
  index?: number,
) => void

export interface SectionLayout {
  summary: PageNumber
  /** One entry per experience item — index matches data.experience array */
  experiencePages: PageNumber[]
  /** One entry per project item — index matches data.projects array */
  projectPages: PageNumber[]
}

export function createDefaultSectionLayout(data: ResumeData): SectionLayout {
  return {
    summary: 1,
    experiencePages: data.experience?.map(() => 1 as PageNumber) ?? [],
    projectPages: data.projects?.map(() => 1 as PageNumber) ?? [],
  }
}
