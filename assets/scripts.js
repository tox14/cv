const BUTTON_ID = 'download-pdf';

// Script loader configuration
const scriptConfig = [
  {
    library: 'html2canvas',
    loadScriptUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js',
  },
  {
    library: 'jspdf',
    loadScriptUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
  },
];

const loadScript = (src) =>
  new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });

const areLibrariesLoaded = () =>
  scriptConfig.every(({ library }) => window[library]);

const loadAllScripts = async () =>
  Promise.all(
    scriptConfig.map(({ loadScriptUrl }) => loadScript(loadScriptUrl))
  );

let pdfLibrariesLoaded = false;
let pdfLibrariesLoading = false;

const preloadPdfLibraries = () => {
  if (pdfLibrariesLoaded || pdfLibrariesLoading) return;
  pdfLibrariesLoading = true;
  ensurePdfLibrariesLoaded().catch(() => {
    pdfLibrariesLoading = false;
  });
};

const ensurePdfLibrariesLoaded = async () => {
  if (pdfLibrariesLoaded) return;
  if (areLibrariesLoaded()) {
    pdfLibrariesLoaded = true;
    return;
  }
  await loadAllScripts();
  pdfLibrariesLoaded = true;
};

const generateAndDownloadPDF = async function () {
  const btn = this;
  btn.disabled = true;
  const originalText = btn.querySelector('span').textContent;
  btn.querySelector('span').textContent = pdfLibrariesLoaded
    ? 'Generating...'
    : 'Loading...';

  try {
    await ensurePdfLibrariesLoaded();
    btn.querySelector('span').textContent = 'Generating...';

    const actionPanel = document.querySelector('.action-panel');
    const container = document.querySelector('.container');
    const canvas = await window.html2canvas(container, {
      scale: 2,
      logging: false,
      ignoreElements: (element) => element === actionPanel,
    });
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = 210;
    const pageHeight = 297;
    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;
    pdf.addImage(
      canvas.toDataURL('image/png'),
      'PNG',
      0,
      position,
      imgWidth,
      imgHeight
    );
    heightLeft -= pageHeight;
    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(
        canvas.toDataURL('image/png'),
        'PNG',
        0,
        position,
        imgWidth,
        imgHeight
      );
      heightLeft -= pageHeight;
    }
    const fileName = btn.dataset.fileName || 'CV.pdf';
    pdf.save(fileName);
  } catch (error) {
    console.error('PDF generation error:', error);
    alert('Error generating PDF');
  } finally {
    btn.disabled = false;
    btn.querySelector('span').textContent = originalText;
  }
};

const downloadBtn = document.getElementById(BUTTON_ID);

// Preload libraries on hover/focus/touch for instant click response
downloadBtn.addEventListener('touchstart', preloadPdfLibraries, {
  once: true,
  passive: true,
});
downloadBtn.addEventListener('mouseenter', preloadPdfLibraries, { once: true });
downloadBtn.addEventListener('focus', preloadPdfLibraries, { once: true });

downloadBtn.addEventListener('click', generateAndDownloadPDF);
