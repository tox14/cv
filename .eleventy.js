import htmlmin from 'html-minifier-terser';

export default function (eleventyConfig) {
  eleventyConfig.addTransform('htmlmin', function (content) {
    if (this.outputPath && this.outputPath.endsWith('.html')) {
      return htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
    }
    return content;
  });

  eleventyConfig.addPassthroughCopy('translations');

  return {
    dir: {
      input: '.',
      output: '_site',
    },
  };
}
