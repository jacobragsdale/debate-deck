import { CardType, TagType } from './dataTypes';
import { ACTION_TYPES } from './actionTypes';

//this class is used to fetch and store things to redux
export default class ReduxActions {
    static storeCard(card: CardType) {
        return {
            type: ACTION_TYPES.STORE_CARD,
            payload: card,
        };
    }

    static deleteCard(card: CardType) {
        return {
            type: ACTION_TYPES.DELETE_CARD,
            payload: card,
        };
    }

    static storeSearchString(search: string) {
        return {
            type: ACTION_TYPES.STORE_SEARCH_STRING,
            payload: search,
        };
    }

    static storeTag(tag: TagType) {
        return {
            type: ACTION_TYPES.STORE_TAG,
            payload: tag,
        };
    }

    static storeUser(user: any) {
        return {
            type: ACTION_TYPES.STORE_USER,
            payload: user,
        };
    }
}
