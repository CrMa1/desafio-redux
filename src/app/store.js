import { configureStore } from '@reduxjs/toolkit'
import nameSlice from '../features/name/nameSlice'

export default configureStore({
  reducer: {
    name: nameSlice,
  },
})