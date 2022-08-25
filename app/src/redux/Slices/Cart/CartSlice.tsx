import { createSlice } from '@reduxjs/toolkit'
import { initialStateType } from './CartSlice.model'

const initialState: initialStateType = {
  cartItems: [],
  quantity: 0,
  total: 0,
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
          }
        })
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 })
        state.quantity += 1
        state.total += action.payload.price
        console.log(`not a duplicate `)
      }
    },
    removeProduct: (state, action) => {
      const inCartItem = state.cartItems.find((item, itemIndex) => {
        if (item.id === action.payload.id && item.quantity > 1) {
          state.cartItems[itemIndex] = {
            ...state.cartItems[itemIndex],
            quantity: item.quantity - 1,
          }
        } else if (item.id === action.payload.id && item.quantity === 1) {
          state.cartItems = state.cartItems.filter(
            (item, index) => index !== itemIndex
          )
        }
      })
      console.log(inCartItem)
    },
  },
})

export const { addProduct, removeProduct } = CartSlice.actions
export default CartSlice.reducer
