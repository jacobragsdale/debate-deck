export type UserType = {
    displayName: string
}

export type CardType = {
    id: string | number
    tag: string
    authors: string[]
    time: any //TODO: change this to datetime format
    publisher: string
    articleTitle: string
    link: string
    tags: string[]
    quote: string
}

export type TagType = {
    label: string,
    isChecked: boolean
}

export type StateType = {
    user: any //TODO: determine user type
    cards: CardType[],
    searchString: string,
    tags: TagType[]
}
