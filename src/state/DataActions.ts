import ReduxActions from './ReduxActions';
import { mockCards } from './mockData/mockCards';
import { mockTags } from './mockData/mockTags';
import { CardType } from './dataTypes';

// when back end is created, api calls will be made here
// to fetch / store things in the database
// for now we are using mock data stored locally
export default class DataActions {
    static fetchCards = () => (dispatch: any) => {
        mockCards.forEach((card) => {
            dispatch(ReduxActions.storeCard(card));
        });
    };

    static fetchTags = () => (dispatch: any) => {
        mockTags.forEach((tag) => {
            dispatch(ReduxActions.storeTag(tag));
        });
    };

    static login =
        (email: string, password: string) =>
        (dispatch: any): boolean => {
            dispatch(ReduxActions.storeUser('temp'));
            return true;
        };

    static postCard = (card: CardType) => (dispatch: any) => {
        //this will dispatch the data to the redux store
        dispatch(ReduxActions.storeCard(card));
    };
}
