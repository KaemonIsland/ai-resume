# AI Resume Builder

A JSON-driven resume builder with a live preview, per-section page management, and one-click PDF export. Built with React, TypeScript, Vite, and styled-components.

---

## Local Setup

**Requirements:** Node.js 18+ and Yarn (or npm)

```bash
git clone https://github.com/KaemonIsland/ai-resume.git
cd ai-resume
yarn install
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) (or the next available port printed in the terminal).

---

## Project Structure

```
src/
├── data/               # Resume JSON files (gitignored except placeholder)
│   └── placeholder.json
├── assets/             # Local images (gitignored — add your headshot here)
├── components/
│   ├── Resume/         # Page 1, Page 2, Sidebar, MainContent
│   └── Toolbar/        # Top bar with upload + export
├── types/resume.ts     # All TypeScript interfaces
└── utils/pdf.ts        # PDF export logic
```

---

## Creating Your Resume

Resume content is driven entirely by a JSON file. The shape is:

```json
{
  "meta": { "title": "Senior Frontend Engineer" },
  "contact": {
    "name": "Your Name",
    "role": "Your Title",
    "email": "you@example.com",
    "phone": "555-000-0000",
    "location": "City, ST",
    "linkedin": "linkedin.com/in/yourhandle",
    "github": "github.com/yourhandle",
    "website": "yoursite.com",
    "avatar": "/src/assets/headshot.jpg"
  },
  "summary": "One paragraph summary...",
  "skills": [
    { "category": "Frontend", "skills": ["React", "TypeScript"] }
  ],
  "experience": [
    {
      "company": "Acme Corp",
      "role": "Senior Engineer",
      "location": "Remote",
      "startDate": "Jan 2022",
      "endDate": "Present",
      "bullets": ["Did impactful thing X", "Shipped feature Y"]
    }
  ],
  "projects": [
    {
      "name": "My Project",
      "tech": ["Next.js", "Tailwind"],
      "link": "https://myproject.com",
      "repo": "github.com/you/myproject",
      "bullets": ["Built X", "Achieved Y"]
    }
  ],
  "education": [
    {
      "institution": "University Name",
      "degree": "Bachelor of Science",
      "field": "Computer Science",
      "startYear": "2014",
      "endYear": "2018"
    }
  ],
  "certifications": [
    { "name": "AWS Certified Developer", "issuer": "Amazon", "year": "2023" }
  ]
}
```

Save your file anywhere and upload it via the toolbar, or drop it into `src/data/` and import it in `src/App.tsx`.

### Profile Photo

`html2canvas` (the PDF capture library) cannot load cross-origin images. For the photo to appear in exported PDFs:

1. Save your headshot to `src/assets/headshot.jpg`
2. Set `"avatar": "/src/assets/headshot.jpg"` in your JSON

The `src/assets/` folder is gitignored so your photo won't be committed.

---

## Using the App

### Toolbar

| Button | Action |
|--------|--------|
| Upload JSON | Load a resume JSON file from your filesystem |
| Export PDF | Captures all visible pages and saves a multi-page PDF |

### Page Layout Controls

Every section and every individual experience/project entry has a move button:

- **↓ Page 2** — moves that item to the second resume page
- **↑ Page 1** — moves it back

Page 2 appears automatically when any item is moved to it, with a navy continuation header showing your name and role. If all items are moved back to page 1, page 2 disappears.

Sections split across pages show **"Experience (cont.)"** / **"Projects (cont.)"** on page 2.

### Page Boundary Indicator

A dashed red line at **1122px** marks the A4 page boundary on page 1. Content below the line will overflow — use the move buttons to push items to page 2 if your resume is running long.

---

## Exporting to PDF

Click **Export PDF** in the toolbar. Each resume paper is captured independently at 2× resolution and placed on its own A4 page in the PDF.

Tips for best results:
- Make sure content on each page doesn't spill past the red dashed line
- Move overflow items to page 2 using the ↓ buttons before exporting
- Use a local image for your avatar (see above) — remote URLs are blocked by CORS during capture

---

## Managing Multiple Resumes

Keep separate JSON files per target role, e.g.:

```
src/data/
├── sr-frontend-eng.json     # React/UI-focused roles
├── full-stack.json          # Full-stack + backend roles
├── ai-forward.json          # AI tooling + Copilot roles
└── gov-contracting.json     # VA / compliance-heavy roles
```

Each file can have different bullets, skills, and summaries. Upload whichever one matches the job posting. The `src/data/` folder is gitignored (except `placeholder.json`) so your personal resume data won't be pushed to GitHub.

---

## Tailoring Tips

- **Keep bullets role-specific** — don't include every bullet from your master document
- **Lead with metrics** — "25% increase in session time" beats "improved UX"
- **Match the skills section to the job posting** — reorder categories so the most relevant ones appear first in the sidebar
- **Summary last** — write or adjust the summary after you've finalized your bullets, so it reflects what's actually on the page
