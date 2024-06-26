import { combineReducers, legacy_createStore, applyMiddleware, AnyAction } from 'redux'
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import {createDecksACType, decksReducer, getDecksACType} from '../features/decks/decks-reducer.ts'

const rootReducer = combineReducers({
  decksReducer,

})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppRootState = ReturnType<typeof rootReducer>

export type AppDispatch = ThunkDispatch<AppRootState, unknown, AnyAction>

//все типы экшенов для всего App
export type AppActionsType = getDecksACType | createDecksACType

//Типизация Thunk
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootState, unknown, AppActionsType>

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector
