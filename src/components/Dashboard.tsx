import React from 'react';
import { Typography } from '@material-ui/core';
import { Header } from './Header';
import { dashboardStyles } from '../style/dashboardStyles';

export const Dashboard: React.FC = () => {
    const classes = dashboardStyles();
    return (
        <div>
            <Header />
            <div className={classes.root}>
                <Typography variant="h3" className={classes.title}>
                    Projects
                </Typography>
            </div>
        </div>
    );
};
