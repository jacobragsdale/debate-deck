import { CardType } from '../dataTypes';
import moment from 'moment';

export const mockCards: CardType[] = [
    {
        id: '7ac92be0-49c5-4c96-b5fd-90fad3fe5218',
        title: 'Example Card 1',
        authors: ['Yuras Karmanau', 'Jim Heintz'],
        date: moment().format('YYYY-MM-DD'),
        publisher: 'Associate Press',
        articleTitle:
            'Ukraine’s capital under threat as Russia presses invasion',
        link: 'https://apnews.com/article/russia-ukraine-vladimir-putin-volodymyr-zelenskyy-boris-johnson-business-08f569df695831ee467979527ea2e241',
        tags: ['con', 'tag1'],
        quote: 'Russian troops bore down on Ukraine’s capital Friday, with explosions and gunfire sounding in the city as the invasion of a democratic country fueled fears of wider war in Europe and triggered worldwide efforts to make Moscow stop.',
    },
    {
        id: '579558bc-2475-4803-9890-ea73f68af198',
        title: 'Example Card 2',
        authors: ['Christian Radnedge'],
        date: moment().format('YYYY-MM-DD'),
        publisher: 'Reuters',
        articleTitle: 'Avast flags money scams as threat amid Ukraine violence',
        link: 'www.google.com',
        tags: ['pro', 'tag2'],
        quote: 'cyber criminals seeking to take advantage of the chaos',
    },
    {
        id: 'd224dad8-b511-4000-804e-c0007f9f6166',
        title: 'Example Card 3',
        authors: ['Jacques Billeaud', 'Luis Andres Henao'],
        date: moment().format('YYYY-MM-DD'),
        publisher: 'Associate Press',
        articleTitle:
            'Priest’s new assignment: Helping those he invalidly baptized',
        link: 'https://apnews.com/article/lifestyle-religion-arizona-phoenix-10196ef0daf8ae338c20f50dfe428b7e',
        tags: ['con', 'tag3'],
        quote: '“To me, he didn’t do it intentionally,” Najera said. “It was just a mistake.”',
    },
    {
        id: '61b52a80-220e-45b5-aac9-85ca67864d5b',
        title: 'Example Card 4',
        authors: ['Mark Gleeson'],
        date: moment().format('YYYY-MM-DD'),
        publisher: 'Reuters',
        articleTitle: 'Kenya, Zimbabwe suspended by FIFA',
        link: 'https://www.reuters.com/lifestyle/sports/kenya-zimbabwe-suspended-by-fifa-2022-02-25/',
        tags: ['pro', 'tag4'],
        quote: 'the latest African football associations to be suspended by FIFA',
    },
    {
        id: '175d7335-88da-46b8-8b55-7edbe4b35bec',
        title: 'Example Card 5',
        authors: [
            'Gary Brooker',
            'Dean Jennings',
            'Greg Meyers',
            'Malathi Gundapuneni',
        ],
        date: moment().format('YYYY-MM-DD'),
        publisher: 'Fox News',
        articleTitle: 'Gary Brooker, frontman of Procol Harum, dead at 76',
        link: 'https://www.foxnews.com/entertainment/gary-brooker-frontman-procol-harum-dead',
        tags: ['con', 'tag1'],
        quote: 'frontman who sang one of the 1960s most enduring hits, "A Whiter Shade of Pale," has died. He was 76.',
    },
    {
        id: 'd37fc5f1-0e80-4c0a-9ba1-31f3b505c7f1',
        title: 'Example Card 6',
        authors: ['Melissa Roberto'],
        date: moment().format('YYYY-MM-DD'),
        publisher: 'Fox News',
        articleTitle:
            'Alec Baldwin shares cryptic posts about Buddhism, telling lies amid Rust wrongful death lawsuit',
        link: 'https://www.foxnews.com/entertainment/alec-baldwin-cryptic-posts-buddhism-telling-lies',
        tags: ['pro', 'tag2'],
        quote: "Halyna Hutchins' husband called out the actor on Thursday for not accepting responsibility in the 'Rust' shooting",
    },
];
