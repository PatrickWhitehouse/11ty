const pluginSEO = require("eleventy-plugin-seo");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css/styles.css");
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("./src/blog/img");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/js/app.js");
  eleventyConfig.addPlugin(pluginSEO, {
    title: "Patrick Whitehouse, front end developer based in Derbyshire, UK",
    description:
      "Portfolio of Patrick Whitehouse, front end developer based in Derbyshire, UK.",
    url: "https://pad.wtf",
    author: "Patrick Whitehouse",
    twitter: "patrickdoesweb",
    image: "assets/favicon.svg",
  });
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
