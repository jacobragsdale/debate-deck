import { CardType, TagType } from '../../state/dataTypes';

export class CardListUtils {
    static searchCard = (searchString: string, card: CardType): boolean => {
        searchString = searchString.toUpperCase();
        if (
            card.title.toUpperCase().includes(searchString) ||
            card.publisher?.toUpperCase().includes(searchString) ||
            card.articleTitle?.toUpperCase().includes(searchString) ||
            card.quote.toUpperCase().includes(searchString)
        ) {
            return true;
        }
        if (card.authors && card.authors.length > 0) {
            for (let i = 0; i < card.authors.length; i++) {
                if (card.authors[i].toUpperCase().includes(searchString)) {
                    return true;
                }
            }
        }
        return false;
    };

    static hasTag = (tags: TagType[], card: CardType): boolean => {
        let hasCheckedTag = false;
        tags.forEach((tag) => {
            if (tag.isChecked) {
                hasCheckedTag = true;
            }
        });
        if (!hasCheckedTag) {
            return true;
        }

        let hasTag = false;
        tags.forEach((tag) => {
            card.tags?.forEach((cardTag) => {
                if (tag.isChecked && tag.label === cardTag) {
                    hasTag = true;
                }
            });
        });
        return hasTag;
    };
}
