import s from './DecksList.module.css'
import {useAppDispatch, useAppSelector} from "../../../app/store.ts";
import {useEffect} from "react";
import {DeckItem} from "./DeckItem/DeckItem.tsx";
import {selectDecks} from "../decks-selectors.ts";
import {setDecksTC} from "../decks-thunks.ts";


export const DecksList = () => {
    const decks = useAppSelector(selectDecks)
    const dispatch = useAppDispatch()
    useEffect(() => {
        //вынес в decks-thunks.ts - там создал setDecksTC
        // decksAPI.getDecks().then((res) => {
        //      dispatch(setDecksAC(res.data.items))
        // })
        dispatch(setDecksTC())
    }, [dispatch]);

    return <ul className={s.list}>
        {decks.map((deck) => (
            <DeckItem key={deck.id} deck={deck}/>
        ))}
    </ul>
}


