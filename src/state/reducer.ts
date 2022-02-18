import { ACTION_TYPES } from './actionTypes'
import { CardType } from './dataTypes'

const initialState = {
    cards: [],
}

export type ActionType = {
    type: string
    payload?: any
}

export const reducer = (
    state: typeof initialState = initialState,
    action: ActionType
) => {
    switch (action.type) {
        case ACTION_TYPES.STORE_CARD:
            return {
                ...state,
                cards: state.cards.concat(action.payload),
            }
        case ACTION_TYPES.DELETE_CARD:
            return {
                ...state,
                cards: state.cards.filter((card: CardType) => {
                    return card.id !== action.payload.id
                }),
            }
        case ACTION_TYPES.CLEAR_CARDS:
            return {
                ...state,
                cards: [],
            }
        default:
            return state
    }
}
