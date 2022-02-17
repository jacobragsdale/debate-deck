import { CardType } from './dataTypes'

export const mockCards: CardType[] = [
    {
        id: 1,
        tag: 'Example Card 1',
        authors: ['Author 1', 'Author 2'],
        time: { month: 'May', day: 1, year: 2020 },
        publisher: 'Publisher',
        articleTitle: 'Article Title',
        link: 'https://www.google.com',
        tags: ['Pro', 'Another Tag'],
        quote: 'a super long quote ... a super long quote ... a super long quote ... a super long quote ... a super long quote ... a super long quote ... a super long quote ... a super long quote ... a super long quote ... ',
    },
    {
        id: 2,
        tag: 'Example Card 2',
        authors: ['Author 1', 'Author 2'],
        time: { month: 'May', day: 1, year: 2020 },
        publisher: 'Publisher',
        articleTitle: 'Article Title',
        link: 'https://www.google.com',
        tags: ['Pro', 'Another Tag'],
        quote: 'a super long quote ... a super long quote ... a super long quote ... a super long quote ... a super long quote ... a super long quote ... a super long quote ... a super long quote ... a super long quote ... ',
    },
]
