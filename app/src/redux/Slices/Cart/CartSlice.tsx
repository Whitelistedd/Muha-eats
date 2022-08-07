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
        console.log(`a duplicate ${action.payload}`)
      } else {
        console.log(`not a duplicate ${action.payload}`)
      }
    },
  },
})

export const { addProduct } = CartSlice.actions
export default CartSlice.reducer
