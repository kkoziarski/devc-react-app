import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// const codespaceName = process.env['CODESPACE_NAME'];
// const hmrPort = 3000;

// const hmrRemoteHost = codespaceName ? `${codespaceName}-${hmrPort}.preview.app.github.dev` : 'localhost';
// const hmrRemotePort = codespaceName ? 443 : hmrPort;

// console.log({codespaceName})
// // then in the config...


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    // host: 'localhost',
    // hmr: {
    //   host: hmrRemoteHost,
    //   port: hmrPort,
    //   clientPort: hmrRemotePort
    // }
    // hmr: { clientPort: process.env.CODESPACES ? 443 : undefined }
  },
})
