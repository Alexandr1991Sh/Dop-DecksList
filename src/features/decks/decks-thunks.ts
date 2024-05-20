import {AddDeckParams, Deck, decksAPI} from "./decks-api.ts";
import {createDecksAC, setDecksAC} from "./decks-reducer.ts";
import {AppThunkType} from "../../app/store.ts";

export const setDecksTC = (): AppThunkType =>
    (dispatch) => {
        decksAPI.getDecks().then((res) => {
            dispatch(setDecksAC(res.data.items))
        })
    }

export const createDecksTC = (params: AddDeckParams): AppThunkType =>
    (dispatch) => {
        decksAPI.postDecks(params).then((res) => {
            dispatch(createDecksAC(res.data))
        })
    }