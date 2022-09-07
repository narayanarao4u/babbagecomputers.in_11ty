module.exports = function(eleventyConfig){
    eleventyConfig.addPassthroughCopy('src/favicon.ico');
    eleventyConfig.addPassthroughCopy('src/assests');
    eleventyConfig.addPassthroughCopy('src/BCTLOGO.png');
    eleventyConfig.addPassthroughCopy('src/googlea1f1d7a9e8a26702.html');
    // Return your Object options:
    return {
        dir: {
          input: 'src',
          includes: '_includes',
          output: 'dist',
        },
        templateFormats: ['md', 'njk', 'html'],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
      };

}