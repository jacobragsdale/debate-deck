import React from 'react'
import { Typography } from '@material-ui/core'
import DDUtils from '../DDUtils'
import { CardListItem } from './CardListItem'
import { CardType } from '../../state/dataTypes'
import { useSelector } from 'react-redux'
import { cardListStyles } from '../../style/card-list/cardListStyles'

export const CardList: React.FC = () => {
    const classes = cardListStyles();

    // get cards from redux
    const cards: CardType[] = useSelector((state: any) => {
        return state.cards || []
    })

    return (
        <div className={classes.root}>
            <Typography variant="h3" className={classes.projectTitle}>
                {DDUtils.getProjectTitle()}
            </Typography>
            {cards.map((card) => (
                <CardListItem card={card} key={card.id} />
            ))}
        </div>
    )
}
