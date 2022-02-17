import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { Header } from './Header'
import DDUtils from './DDUtils'

const theme = DDUtils.getProjectTheme()
const useStyles = makeStyles({
    root: {
        background: theme.palette.background.default,
        width: '100%',
        height: '100%',
        position: 'absolute',
        padding: theme.spacing(10, 2),
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        color: theme.palette.text.primary,
    },
    projectCard: {
        margin: theme.spacing(2),
        padding: theme.spacing(2),
        borderRadius: 24,
        background: theme.palette.background.paper,
    },
})

export const Dashboard: React.FC = () => {
    const classes = useStyles()
    return (
        <div>
            <Header />
            <div className={classes.root}>
                <Typography variant="h3" className={classes.title}>
                    Projects
                </Typography>
            </div>
        </div>
    )
}
