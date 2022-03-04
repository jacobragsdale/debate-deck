import React from 'react';
import { Typography } from '@material-ui/core';
import { Header } from './Header';
import { helpStyles } from '../style/helpStyles';

export const Help: React.FC = () => {
    const classes = helpStyles();
    return (
        <div>
            <Header />
            <div className={classes.root}>
                <Typography variant="h3" className={classes.title}>
                    Help
                </Typography>
            </div>
        </div>
    );
};
