import ReduxActions from './ReduxActions';
import { mockTags } from './mockData/mockTags';
import { CardType } from './dataTypes';

// when back end is created, api calls will be made here
// to fetch / store things in the database
// for now we are using mock data stored locally
export default class DataActions {
    static fetchUserData = () => (dispatch: any) => {
        return fetch('http://ragsdaledev.com:8080/api/fetchUserData', {
            method: 'POST',
            body: JSON.stringify({ id: 1 }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                data?.forEach((card: any) => {
                    card.authors = card.authors.split(',');
                    card.tags = card.tags.split(',');

                    dispatch(ReduxActions.storeCard(card));
                });
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
        return fetch('http://ragsdaledev.com:8080/api/createCard', {
            method: 'POST',
            body: JSON.stringify({
                userId: 1,
                title: card.title,
                authors: '', //TODO: handle authors
                date: card.date,
                publisher: card.publisher,
                articleTitle: card.articleTitle,
                link: card.link,
                tags: '', //TODO: handle tags
                quote: card.quote,
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then((data) => {
                dispatch(ReduxActions.storeCard(card)); //TODO: figure out why this isn't working
            });
    };
}
