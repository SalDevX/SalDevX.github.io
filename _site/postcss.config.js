module.exports = {
    plugins: [
      require('@tailwindcss/postcss'),  // This is the new PostCSS plugin for Tailwind CSS
      require('postcss-custom-properties'),
      require('postcss-nested'),
      require('autoprefixer'),
      require("./tailwind.config.js"),
    ]
  }
  
