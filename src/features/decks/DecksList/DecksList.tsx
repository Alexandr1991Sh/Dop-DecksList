import s from './DecksList.module.css'
import {DeckItem} from "./DeckItem/DeckItem.tsx";
import {useFetchDeck} from "./useFetchDeck.ts";


export const DecksList = () => {

 const {decks}=  useFetchDeck()

    return <ul className={s.list}>
        {decks.map((deck) => (
            <DeckItem key={deck.id} deck={deck}/>
        ))}
    </ul>
}


