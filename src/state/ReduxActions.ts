import { CardType } from './dataTypes'
import { ACTION_TYPES } from './actionTypes'

export default class ReduxActions {
    static storeCards(card: CardType[]) {
        return {
            type: ACTION_TYPES.STORE_CARD,
            payload: card,
        }
    }

    static deleteCard(card: CardType) {
        return {
            type: ACTION_TYPES.DELETE_CARD,
            payload: card,
        }
    }

    static clearCards() {
        return {
            type: ACTION_TYPES.CLEAR_CARDS,
        }
    }
}
