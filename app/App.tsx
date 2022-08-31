import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

import RootNavigation from 'src/navigation/navigation'
import { persistor, store } from 'src/redux/store/store'
import { theme } from 'src/theme'
import { PersistGate } from 'redux-persist/integration/react'
import { Text } from 'react-native'

export default function App() {
  return (
    <ThemeProvider theme={theme.light}>
      <Provider store={store}>
        <PersistGate loading={<Text>Loading</Text>} persistor={persistor}>
          <RootNavigation />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  )
}
