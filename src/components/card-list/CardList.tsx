import React from 'react';
import { Typography } from '@material-ui/core';
import DDUtils from '../DDUtils';
import { CardListItem } from './CardListItem';
import { CardType, TagType } from '../../state/dataTypes';
import { useSelector } from 'react-redux';
import { cardListStyles } from '../../style/card-list/cardListStyles';
import { CardListUtils } from './CardListUtils';

export const CardList: React.FC = () => {
    const classes = cardListStyles();

    // get cards from redux
    const cards: CardType[] = useSelector((state: any) => {
        return state.cards || [];
    });
    // get search string from redux
    const searchString: string = useSelector((state: any) => {
        return state.searchString;
    });
    // get gags from redux
    const tags: TagType[] = useSelector((state: any) => {
        return state.tags;
    });

    return (
        <div className={classes.root}>
            <Typography variant="h3" className={classes.projectTitle}>
                {DDUtils.getProjectTitle()}
            </Typography>
            {cards
                .filter((card) => CardListUtils.searchCard(searchString, card))
                .filter((card) => CardListUtils.hasTag(tags, card))
                .map((card) => (
                    <CardListItem card={card} key={card.id} />
                ))}
        </div>
    );
};
