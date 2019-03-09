//const webpack = require("webpack");
const _ = require("lodash");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const { createFilePath } = require(`gatsby-source-filesystem`);
const locales = require("./src/i18n/locales");

exports.createPages = ({ graphql, actions }) => {
  const { createRedirect } = actions;

  createRedirect({ fromPath: "/", toPath: "/fr", redirectInBrowser: true });
  createRedirect({ fromPath: "/", toPath: "/en", redirectInBrowser: true, Language: "en" });
  createRedirect({ fromPath: "/", toPath: "/en", redirectInBrowser: true, Language: "en-ca" });
  createRedirect({ fromPath: "/", toPath: "/en", redirectInBrowser: true, Language: "en-us" });
  createRedirect({ fromPath: "/", toPath: "/fr", redirectInBrowser: true, Language: "fr" });
  createRedirect({ fromPath: "/", toPath: "/fr", redirectInBrowser: true, Language: "fr-ca" });
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  if (page.path.match(/404/)) {
    return;
  }

  return new Promise(resolve => {
    deletePage(page);

    Object.keys(locales).map(lang => {
      const localizedPath = locales[lang].path + page.path;

      return createPage({
        ...page,
        path: localizedPath,
        context: {
          locale: lang
        }
      });
    });

    resolve();
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode });
    const fileNode = getNode(node.parent);
    const source = fileNode.sourceInstanceName;
    const separtorIndex = ~slug.indexOf("--") ? slug.indexOf("--") : 0;
    const shortSlugStart = separtorIndex ? separtorIndex + 2 : 0;

    if (source !== "parts") {
      createNodeField({
        node,
        name: `slug`,
        value: `${separtorIndex ? "/" : ""}${slug.substring(shortSlugStart)}`
      });
    }
    createNodeField({
      node,
      name: `prefix`,
      value: separtorIndex ? slug.substring(1, separtorIndex) : ""
    });
    createNodeField({
      node,
      name: `source`,
      value: source
    });
  }
};

exports.onCreateWebpackConfig = ({ stage, actions }, options) => {
  switch (stage) {
    case `build-javascript`:
      actions.setWebpackConfig({
        plugins: [
          new BundleAnalyzerPlugin({
            analyzerMode: "static",
            reportFilename: "./report/treemap.html",
            openAnalyzer: true,
            logLevel: "error",
            defaultSizes: "gzip"
          })
        ]
      });
  }
};
