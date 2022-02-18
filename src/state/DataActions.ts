import { mockCards } from './mockData'
import ReduxActions from './ReduxActions'

export default class DataActions {
    static fetchCards = () => (dispatch: any) => {
        dispatch(ReduxActions.storeCards(mockCards))
    }
}
