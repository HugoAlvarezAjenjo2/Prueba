module.exports = function (eleventyConfig) {
  eleventyConfig.addGlobalData("basePath", process.env.NODE_ENV === 'production' ? "/NombreDelRepositorio" : "");
  // Copiar carpetas estáticas directamente al output
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/js");

  eleventyConfig.addFilter("safe", function (value) {
    return value;
  });

  return {
    dir: {
      input: "src",      // Carpeta de entrada
      output: "dist",    // Carpeta de salida
    },
    htmlTemplateEngine: "liquid", // Motor de plantillas (puedes cambiarlo si prefieres otro)
    markdownTemplateEngine: "liquid",
  };
};
