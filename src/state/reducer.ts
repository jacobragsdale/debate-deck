import { ACTION_TYPES } from './actionTypes';
import { CardType, StateType, TagType } from './dataTypes';

const initialState: StateType = {
    cards: [],
    searchString: '',
    tags: [],
    user: null,
};

export type ActionType = {
    type: string;
    payload?: any;
};

export const reducer = (
    state: StateType = initialState,
    action: ActionType
) => {
    switch (action.type) {
        case ACTION_TYPES.STORE_CARD:
            return {
                ...state,
                cards: state.cards.concat(action.payload),
            };
        case ACTION_TYPES.DELETE_CARD:
            return {
                ...state,
                cards: state.cards.filter((card: CardType) => {
                    return card.id !== action.payload.id;
                }),
            };
        case ACTION_TYPES.STORE_SEARCH_STRING:
            return {
                ...state,
                searchString: action.payload,
            };
        case ACTION_TYPES.STORE_TAG:
            let hasTag = false;
            let newTags: TagType[] = state.tags.slice();
            for (let i = 0; i < newTags.length; i++) {
                if (newTags[i].label === action.payload.label) {
                    newTags[i] = action.payload;
                    hasTag = true;
                }
            }
            if (!hasTag) {
                newTags = newTags.concat(action.payload);
            }
            return {
                ...state,
                tags: newTags,
            };
        case ACTION_TYPES.STORE_USER:
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
};
