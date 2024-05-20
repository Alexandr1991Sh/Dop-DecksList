import {Deck} from "./decks-api.ts";

const initialState = {
    decks: [] as Deck[],
    searchParams: {
        name: '',
    },
}

type DecksState = typeof initialState

export type getDecksACType = ReturnType<typeof setDecksAC>
type DecksActions = getDecksACType

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
    switch (action.type) {
        case "SET-DECKS": {
            return {...state, decks: action.decks}
        }
        default:
            return state
    }
}


export const setDecksAC = (decks: Deck[]) => {
    return {
        type: 'SET-DECKS',
        decks: decks
    } as const
}
