export type UserType = {
    id: number,
    email?: string,
    displayName?: string
    createdDateTime?: string
}

export type CardType = {
    id: number,
    userId?: number,
    title: string,
    authors?: string[],
    //the question mark makes the time object unnecessary
    date?: string,
    publisher?: string,
    articleTitle?: string,
    link?: string,
    tags?: string[],
    quote: string
}

export type TagType = {
    label: string,
    isChecked: boolean
}

export type StateType = {
    user: UserType | null,
    cards: CardType[],
    searchString: string,
    tags: TagType[]
}
