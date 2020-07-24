// vite.config.js
module.exports = {
    vueCompilerOptions: {
        isCustomElement: tag => tag === 'my-input'
    }
  }