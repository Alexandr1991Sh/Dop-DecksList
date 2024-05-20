import s from './DecksList.module.css'
import {DeckItem} from "./DeckItem/DeckItem.tsx";
import {setDecks} from "./setDecks.ts";


export const DecksList = () => {

 const {decks}=  setDecks()

    return <ul className={s.list}>
        {decks.map((deck) => (
            <DeckItem key={deck.id} deck={deck}/>
        ))}
    </ul>
}


