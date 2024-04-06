import { defineConfig, loadEnv } from 'vite'

import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    server: {
      host: '0.0.0.0',
      port: Number(env.VITE_APP_PORT),
      watch: {
        usePolling: true,
      },
    },
    resolve: {
      alias: {
        '@app': `${path.resolve(__dirname, './src/app')}`,
        '@features': `${path.resolve(__dirname, './src/features')}`,
        '@pages': `${path.resolve(__dirname, './src/pages')}`,

        '@share': `${path.resolve(__dirname, './src/share')}`,

        '@helpers': `${path.resolve(__dirname, './src/share/helpers')}`,
        '@components': `${path.resolve(__dirname, './src/share/components')}`,
        '@lib': `${path.resolve(__dirname, './src/share/lib')}`,
        '@hooks': `${path.resolve(__dirname, './src/share/hooks')}`,
        '@constants': `${path.resolve(__dirname, './src/share/constants')}`,
        '@utils': `${path.resolve(__dirname, './src/share/utils')}`,
        '@services': `${path.resolve(__dirname, './src/share/services')}`,
        '@models': `${path.resolve(__dirname, './src/share/models')}`,
        '@styles': `${path.resolve(__dirname, './src/share/styles')}`,
      },
    },
  }
})
