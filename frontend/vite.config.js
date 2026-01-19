import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

const DEFAULT_PORT = 3001

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return defineConfig({
    plugins: [react()],
    server: {
      port: Number(env.VITE_PORT) || DEFAULT_PORT
    }
  })
  
} 
