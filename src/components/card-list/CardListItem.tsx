import React from 'react'
import { Typography, Card, Chip, Link } from '@material-ui/core'
import { CardType } from '../../state/dataTypes'
import { cardListItemStyles } from '../../style/card-list/cardListItemStyles'

interface CardListItemProps {
    card: CardType
}

export const CardListItem: React.FC<CardListItemProps> = ({ card }) => {
    const classes = cardListItemStyles();
    return (
        <Card variant="outlined" key={card.id} className={classes.card}>
            <Typography variant="h5" className={classes.cardTitle}>
                {card.tag}
            </Typography>
            <div className={classes.information}>
                <div className={classes.leftPanel}>
                    <div className={classes.citation}>
                        <Typography variant="body1">
                            <b>
                                {`${card.authors[0] && card.authors[0]} ${
                                    card.time.year
                                }`}
                            </b>
                        </Typography>
                    </div>
                    <div className={classes.citation}>
                        <Typography variant="body1">
                            {card.authors.join(' and ')}
                        </Typography>
                    </div>
                    <div className={classes.citation}>
                        <Typography variant="body1">
                            {`${card.publisher}, ${card.time.month} ${card.time.year}`}
                        </Typography>
                    </div>
                    <div className={classes.citation}>
                        <Typography variant="body1">
                            <Link
                                href={card.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                color="inherit"
                            >
                                {' '}
                                {card.articleTitle}{' '}
                            </Link>
                        </Typography>
                    </div>
                    <div className={classes.citation}>
                        {card.tags.map((tag) => (
                            <Chip
                                variant="outlined"
                                size="small"
                                key={tag}
                                className={classes.chip}
                                label={tag}
                            />
                        ))}
                    </div>
                </div>
                <div className={classes.rightPanel}>
                    <Typography variant="body1" className={classes.quote}>
                        <i>{`"${card.quote}"`}</i>
                    </Typography>
                </div>
            </div>
        </Card>
    )
}
