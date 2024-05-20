import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://api.flashcards.andrii.es',
    headers: {
        'x-auth-skip': true,
    },
})

export const decksAPI = {
    getDecks() {
        return instance.get<getDecksResponseType>(`/v2/decks`)
    }
}


export type getDecksResponseType = {
	items: Deck[]
	pagination: Pagination
}
export type Author = {
	id: string
	name: string
}
export type Deck = {
	author: Author
	id: string
	userId: string
	name: string
	isPrivate: boolean
	cover: string
	created: string
	updated: string
	cardsCount: number
}
export type Pagination = {
	currentPage: number
	itemsPerPage: number
	totalPages: number
	totalItems: number
}