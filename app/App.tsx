import React from 'react'
import { ThemeProvider } from 'styled-components'
import RootNavigation from './navigation'

import { theme } from './src/theme'

export default function App() {
  return (
    <ThemeProvider theme={theme.light}>
      <RootNavigation />
    </ThemeProvider>
  )
}
