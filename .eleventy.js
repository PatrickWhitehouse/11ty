const pluginSEO = require("eleventy-plugin-seo");
const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, cls, alt, sizes) {
  let metadata = await Image(src, {
    widths: [500, 768, 1280],
    outputDir: "./public/img",
  });

  let imageAttributes = {
    class: cls,
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  eleventyConfig.addPassthroughCopy("./src/css/styles.css");
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("./src/blog/img");
  eleventyConfig.addPassthroughCopy("./src/case-studies/**/*.png");
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
