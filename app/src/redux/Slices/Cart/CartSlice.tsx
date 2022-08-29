import { createSlice } from '@reduxjs/toolkit'
import { initialStateType } from './CartSlice.model'

const initialState: initialStateType = {
  cartItems: [],
  quantity: 0,
  total: 0,
  deliveryMethod: 'Доставка',
}

const CartSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const DuplicateItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      )
      if (DuplicateItem) {
        state.cartItems.forEach((item, index) => {
          if (item.id === action.payload.id) {
            state.cartItems[index] = {
              ...state.cartItems[index],
              quantity: item.quantity + 1,
            }
            state.quantity += 1
            state.total += item.price
          }
        })
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 })
        state.quantity += 1
        state.total += action.payload.price
      }
    },
    removeProduct: (state, action) => {
      const inCartItem = state.cartItems.find((item, itemIndex) => {
        if (item.id === action.payload.id && item.quantity > 1) {
          state.cartItems[itemIndex] = {
            ...state.cartItems[itemIndex],
            quantity: item.quantity - 1,
          }
          state.quantity -= 1
          state.total -= item.price
        } else if (item.id === action.payload.id && item.quantity === 1) {
          state.cartItems = state.cartItems.filter(
            (item, index) => index !== itemIndex
          )
          state.quantity -= 1
          state.total -= item.price
        }
      })
    },
    changeDeliveryMethod: (state, action) => {
      if (action.payload === state.deliveryMethod) return
      state.deliveryMethod = action.payload
      if (action.payload === 'Доставка') {
        state.total += 500
      } else {
        state.total -= 500
      }
    },
  },
})

export const { addProduct, removeProduct, changeDeliveryMethod } =
  CartSlice.actions
export default CartSlice.reducer
