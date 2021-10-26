module.exports = function(eleventyConfig) {
	
	eleventyConfig.setTemplateFormats([ "html", "njk", "md", "css" ]);
  
  // Return your options Object
  // Set input and output folders
  return {
    dir: {
      input: "src",
      output: "build"
    }
  }
}
