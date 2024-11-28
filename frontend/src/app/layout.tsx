'use client'

import { SessionProvider } from 'next-auth/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Session } from 'next-auth'

// muiテーマ設定
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#6BC656' },
    secondary: { main: '#65BABA' },
    background: { default: '#121212', paper: '#1d1d1d' },
    text: { primary: '#ffffff', secondary: '#b0bec5' },
  },
})

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode
  session: Session | null // 型を明確に指定
}) {
  return (
    <html lang='en'>
      <body>
        {/* muiダークモード設定 */}
        <ThemeProvider theme={theme}>
          {/* muiダークモード設定 */}
          <CssBaseline />
          {/* Next Authの設定 */}
          <SessionProvider session={session}>{children}</SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
