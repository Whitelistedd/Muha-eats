import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import CartSlice from '../Slices/Cart/CartSlice'

export const store = configureStore({
  reducer: CartSlice,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const AppDispatch = () => useDispatch<AppDispatchType>() //
