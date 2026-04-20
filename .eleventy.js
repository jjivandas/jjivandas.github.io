const markdownIt = require("markdown-it");
const fs = require("fs");
const path = require("path");

module.exports = function (eleventyConfig) {
  const md = markdownIt({ html: true, linkify: true });

  // Markdown filter: use {{ myVar | md }} in templates to render markdown
  eleventyConfig.addFilter("md", (value) => {
    if (!value) return "";
    return md.render(value);
  });

  // Inline markdown (no wrapping <p>): use {{ myVar | mdInline }}
  eleventyConfig.addFilter("mdInline", (value) => {
    if (!value) return "";
    return md.renderInline(value);
  });

  // Load markdown content files as global data
  eleventyConfig.addGlobalData("markdownContent", () => {
    const contentDir = path.join(__dirname, "src", "content");
    const data = {};
    if (fs.existsSync(contentDir)) {
      for (const file of fs.readdirSync(contentDir)) {
        if (file.endsWith(".md")) {
          const name = file.replace(".md", "");
          const raw = fs.readFileSync(path.join(contentDir, file), "utf-8");
          data[name] = md.render(raw);
        }
      }
    }
    return data;
  });

  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
