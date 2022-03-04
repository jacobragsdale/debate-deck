export type UserType = {
    displayName: string;
};

export type CardType = {
    id: string;
    title: string;
    //the question mark makes the field optional
    //technically, it makes it type 'string[] | undefined'
    authors?: string[];
    date?: string;
    publisher?: string;
    articleTitle?: string;
    link?: string;
    tags?: string[];
    quote: string;
};

export type TagType = {
    label: string;
    isChecked: boolean;
};

export type StateType = {
    user: any; //TODO: determine user type
    cards: CardType[];
    searchString: string;
    tags: TagType[];
};
