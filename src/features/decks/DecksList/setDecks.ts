import {useAppDispatch, useAppSelector} from "../../../app/store.ts";
import {selectDecks} from "../decks-selectors.ts";
import {useEffect} from "react";
import {setDecksTC} from "../decks-thunks.ts";

export const setDecks = () => {
    const decks = useAppSelector(selectDecks)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setDecksTC())
    }, [dispatch]);

    return{
        decks
    }
}