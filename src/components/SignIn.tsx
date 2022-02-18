import React from 'react'
import { Card, Typography, Button } from '@material-ui/core'
import { Header } from './Header'
import { signInStyles } from '../style/signInStyles'

export const SignIn: React.FC = () => {
    const classes = signInStyles();

    return (
        <div>
            <Header></Header>
            <div className={classes.root}>
                <Card className={classes.card}>
                    <Typography variant="h4" className={classes.titleText}>
                        Login
                    </Typography>
                </Card>
                <Card className={classes.card}>
                    <Typography variant="body2"> </Typography>
                    <Button
                        className={classes.button}
                        variant="outlined"
                        href="/"
                    >
                        Logout
                    </Button>
                </Card>
            </div>
        </div>
    )
}
