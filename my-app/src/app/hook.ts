import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'
// interface RootState {
//     isOn: boolean
//   }
  
//   // TS infers type: (state: RootState) => boolean
//   const selectIsOn = (state: RootState) => state.isOn
  
//   // TS infers `isOn` is boolean
//   const isOn = useSelector(selectIsOn)
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector