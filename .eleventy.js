module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/css/styles.css');
  eleventyConfig.addPassthroughCopy('./src/img');
  eleventyConfig.addPassthroughCopy('./src/blog/img');
  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy("./src/js/app.js");
  return {
    dir: {
      input: 'src',
      output: 'public'
    }
  }
}