import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

// Each element in the array becomes one PDF page.
// No slicing — every element is expected to be a self-contained resume paper.
export async function exportToPDF(
  elements: HTMLElement[],
  filename = 'resume.pdf',
): Promise<void> {
  const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
  const pdfWidth = pdf.internal.pageSize.getWidth()   // 210 mm
  const pdfHeight = pdf.internal.pageSize.getHeight() // 297 mm

  for (let i = 0; i < elements.length; i++) {
    if (i > 0) pdf.addPage()

    const canvas = await captureElement(elements[i])

    // Scale to A4 width, proportional height (794×1122px = exactly A4 at 96dpi)
    const imgAspect = canvas.height / canvas.width
    const imgHeightMM = pdfWidth * imgAspect

    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, pdfWidth, Math.min(imgHeightMM, pdfHeight))
  }

  pdf.save(filename)
}

async function captureElement(element: HTMLElement): Promise<HTMLCanvasElement> {
  const SCALE = 2
  const elementWidth = element.scrollWidth
  const elementHeight = element.scrollHeight

  // Clone outside all scroll/overflow ancestors so html2canvas captures the full element
  const clone = element.cloneNode(true) as HTMLElement
  Object.assign(clone.style, {
    position: 'fixed',
    top: '0',
    left: '-99999px',
    width: `${elementWidth}px`,
    height: `${elementHeight}px`,
    overflow: 'visible',
    zIndex: '-1',
    pointerEvents: 'none',
  })

  clone.querySelectorAll<HTMLElement>('[data-pdf-ignore]').forEach((el) => {
    el.style.display = 'none'
  })

  document.body.appendChild(clone)

  await new Promise<void>((resolve) =>
    requestAnimationFrame(() => requestAnimationFrame(() => resolve())),
  )

  let canvas: HTMLCanvasElement
  try {
    canvas = await html2canvas(clone, {
      scale: SCALE,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
      width: elementWidth,
      height: elementHeight,
    })
  } finally {
    document.body.removeChild(clone)
  }

  return canvas
}
