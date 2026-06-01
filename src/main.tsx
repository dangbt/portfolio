import './i18n'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, ToastProvider } from '@dangbt/pro-ui'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark">
        <ToastProvider />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
