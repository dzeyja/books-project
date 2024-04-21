import { TypedUseSelectorHook } from 'react-redux'
import { AppDispacth, RootState } from '../redux/store'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispacth>()
