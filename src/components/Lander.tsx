import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { landerStyles } from '../style/landerStyles';

export const Lander: React.FC = () => {
    const classes = landerStyles();
    return (
        <div className={classes.root}>
            <Typography variant="h3" className={classes.title}>
                Lander
            </Typography>
            <div className={classes.actionContainer}>
                <Button
                    variant="outlined"
                    href="/signin"
                    className={classes.button}
                >
                    Login
                </Button>{' '}
            </div>
        </div>
    );
};
