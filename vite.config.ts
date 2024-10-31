import { defineConfig } from 'vite'
import dotenv from 'dotenv'
import pluginRewriteAll from 'vite-plugin-rewrite-all'; // <= import the plugin






dotenv.config()

 // load env vars from .env

export default defineConfig({
  plugins: [pluginRewriteAll()],
  define: {
    __VALUE__: `"${process.env.VALUE}"` // wrapping in "" since it's a string
  },
  server: {
    host: true,
    port:3001
  }
  //....
  
})