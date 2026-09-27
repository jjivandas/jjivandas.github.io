import markdownIt from "markdown-it";
import fs from "node:fs";
import path from "node:path";

const md = markdownIt({ html: true, linkify: true });
const contentDir = path.join(import.meta.dirname, "src", "content");

export default function (eleventyConfig) {
  // Load src/content/*.md as global data: markdownContent.<filename> is rendered HTML
  eleventyConfig.addGlobalData("markdownContent", () => {
    const data = {};
    for (const file of fs.readdirSync(contentDir)) {
      if (file.endsWith(".md")) {
        const raw = fs.readFileSync(path.join(contentDir, file), "utf-8");
        data[path.basename(file, ".md")] = md.render(raw);
      }
    }
    return data;
  });

  // Current year for the footer, computed at build time
  eleventyConfig.addGlobalData("year", () => new Date().getFullYear());

  eleventyConfig.addWatchTarget("src/content/");
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/js": "js" });
}

export const config = {
  dir: {
    input: "src",
    output: "_site",
    includes: "_includes"
  },
  templateFormats: ["njk", "md", "html"],
  markdownTemplateEngine: "njk",
  htmlTemplateEngine: "njk"
};
