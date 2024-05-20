import {Deck} from "./decks-api.ts";

const initialState = {
    decks: [] as Deck[],
    searchParams: {
        name: '',
    },
}

type DecksState = typeof initialState

export type getDecksACType = ReturnType<typeof setDecksAC>
export type createDecksACType = ReturnType<typeof createDecksAC>
type DecksActions = getDecksACType | createDecksACType

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
    switch (action.type) {
        case "SET-DECKS": {
            return {...state, decks: action.decks}
        }
        case "CREATE-DECKS": {
            // return {...state, searchParams: {name: action.newDeckName}}
            return {...state, decks: [action.deck, ...state.decks]}
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

export const createDecksAC = (deck: Deck) => {
    return {
        type: 'CREATE-DECKS',
        deck: deck
    } as const
}

