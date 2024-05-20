import {decksAPI} from "./decks-api.ts";
import {setDecksAC} from "./decks-reducer.ts";
import {AppThunkType} from "../../app/store.ts";

export const setDecksTC = (): AppThunkType =>
    (dispatch) => {
        decksAPI.getDecks().then((res) => {
            dispatch(setDecksAC(res.data.items))
        })
    }