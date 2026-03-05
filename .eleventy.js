import htmlmin from 'html-minifier-terser';
import { readFileSync } from 'node:fs';
import { I18nPlugin } from '@11ty/eleventy';

export default function (eleventyConfig) {
  eleventyConfig.addWatchTarget('assets/styles.css');

  eleventyConfig.addPassthroughCopy('assets/**/*');

  eleventyConfig.addPlugin(I18nPlugin, {
    defaultLanguage: 'ru',
    errorMode: 'allow-fallback',
  });

  eleventyConfig.addTransform('htmlmin', function (content) {
    if (this.outputPath && this.outputPath.endsWith('.html')) {
      if (
        content.includes('<link rel="stylesheet" href="/assets/styles.css"/>')
      ) {
        const cssContent = readFileSync('assets/styles.css', 'utf-8');
        content = content.replace(
          '<link rel="stylesheet" href="/assets/styles.css"/>',
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

  return {
    dir: {
      input: '.',
      output: '_site',
    },
  };
}
