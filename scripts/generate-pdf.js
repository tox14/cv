import puppeteer from 'puppeteer';
import { createServer } from 'http';
import { readFile, mkdir, stat } from 'fs/promises';
import { join, extname } from 'path';
import data from '../_data/data.js';

const SITE_DIR = '_site';
const PORT = 3000;
const BASE_URL = `http://localhost:${PORT}`;

const PDF_PAGES = Object.entries(data).map(([lang, langData]) => ({
  lang,
  path: `/${lang}/`,
  outputPath: `${SITE_DIR}/assets/output/${langData.pdf_name}.pdf`,
}));

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

function createStaticServer() {
  return createServer(async (req, res) => {
    const urlPath = req.url.split('?')[0];
    let filePath = join(SITE_DIR, urlPath);

    try {
      const stats = await stat(filePath);
      if (stats.isDirectory()) {
        filePath = join(filePath, 'index.html');
      }

      const content = await readFile(filePath);
      const ext = extname(filePath).toLowerCase();
      const mimeType = MIME_TYPES[ext] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': mimeType });
      res.end(content);
    } catch {
      res.writeHead(404);
      res.end('Not found');
    }
  });
}

async function generatePdf(browser, pageConfig) {
  const { lang, path, outputPath } = pageConfig;
  const url = `${BASE_URL}${path}`;

  console.log(`Generating ${lang.toUpperCase()} PDF from ${url}...`);

  const page = await browser.newPage();

  await page.setViewport({
    width: 1200,
    height: 1600,
    deviceScaleFactor: 2,
  });

  await page.goto(url, {
    waitUntil: 'networkidle0',
    timeout: 30000,
  });

  // Hide the action panel (language switcher and download button)
  await page.evaluate(() => {
    const actionPanel = document.querySelector('.action-panel');
    if (actionPanel) {
      actionPanel.style.display = 'none';
    }
  });

  await page.evaluateHandle('document.fonts.ready');

  // Generate A4 PDF
  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
    },
  });

  await page.close();
  console.log(`  -> Saved to ${outputPath}`);
}

async function main() {
  console.log('Starting PDF generation...\n');

  await mkdir('_site/assets/output', { recursive: true });

  const server = createStaticServer();
  await new Promise((resolve) => server.listen(PORT, resolve));
  console.log(`Static server running at ${BASE_URL}\n`);

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    // Generate PDFs for all configured pages
    for (const pageConfig of PDF_PAGES) {
      await generatePdf(browser, pageConfig);
    }
    console.log('\nAll PDFs generated successfully!');
  } catch (error) {
    console.error('Error generating PDFs:', error);
    process.exit(1);
  } finally {
    await browser.close();
    server.close();
  }
}

main();
