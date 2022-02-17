// Import things.
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, Typography, Button } from '@material-ui/core'
import { Header } from './Header'
import DDUtils from './DDUtils'

const theme = DDUtils.getProjectTheme()

//Styling for Material UI components
const useStyles = makeStyles({
    root: {
        background: theme.palette.background.default,
        width: '100%',
        height: '100%',
        position: 'absolute',
        padding: theme.spacing(10, 0),
    },
    card: {
        margin: theme.spacing(2),
        padding: theme.spacing(2),
        borderRadius: 24,
        maxWidth: 300,
        marginRight: 'auto',
        marginLeft: 'auto',
        background: theme.palette.background.paper,
        flexDirection: 'column',
        alignItems: 'center',
        display: 'flex',
    },
    titleText: {
        color: theme.palette.text.primary,
        textAlign: 'center',
        margin: theme.spacing(3),
    },
    button: {
        borderRadius: 10,
        margin: theme.spacing(1, 0, 0, 0),
    },
})

export const SignIn: React.FC = () => {
    //setup styling
    const classes = useStyles()

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
