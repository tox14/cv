import htmlmin from 'html-minifier-terser';
import { readFileSync } from 'node:fs';

export default function (eleventyConfig) {
  eleventyConfig.addTransform('htmlmin', function (content) {
    if (this.outputPath && this.outputPath.endsWith('.html')) {
      if (content.includes('<link rel="stylesheet" href="styles.css" />')) {
        const cssContent = readFileSync('styles.css', 'utf-8');
        content = content.replace(
          '<link rel="stylesheet" href="styles.css" />',
          `<style>\n${cssContent}\n    </style>`
        );
      }
      return htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
      });
    }
    return content;
  });

  eleventyConfig.addPassthroughCopy('translations');
  eleventyConfig.addPassthroughCopy('js');

  return {
    dir: {
      input: '.',
      output: '_site',
    },
  };
}
