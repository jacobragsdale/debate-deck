import ReduxActions from './ReduxActions'
import { mockCards } from './mockData/mockCards';
import { mockTags } from './mockData/mockTags';

// when back end is created, api calls will be made here
// to fetch / store things in the database
// for now we are using mock data stored locally
export default class DataActions {

    static fetchCards = () => (dispatch: any) => {
        dispatch(ReduxActions.storeCards(mockCards))
    }

    static fetchTags = () => (dispatch: any) => {
        mockTags.forEach((tag) => {
            dispatch(ReduxActions.storeTag(tag));
        })
    }
}
