import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

import RootNavigation from 'src/navigation/navigation'
import { store } from 'src/redux/store/store'
import { theme } from 'src/theme'

export default function App() {
  return (
    <ThemeProvider theme={theme.light}>
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    </ThemeProvider>
  )
}
