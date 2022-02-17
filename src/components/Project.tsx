import React, { useEffect } from 'react'
import { CardList } from './card-list/CardList'
import { SideBar } from './SideBar'
import { Header } from './Header'
import { makeStyles } from '@material-ui/core/styles'
import { Hidden } from '@material-ui/core'
import DDUtils from './DDUtils'
import { useDispatch } from 'react-redux'
import DataActions from '../state/DataActions'

const theme = DDUtils.getProjectTheme()

const useStyles = makeStyles({
    root: {
        padding: theme.spacing(0),
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: theme.palette.background.default,
    },
    sideBar: {
        minWidth: 190,
        margin: theme.spacing(10, 1, 1, 1),
    },
    cardList: {
        margin: theme.spacing(10, 1, 1, 1),
        flexGrow: 1,
        minWidth: 350,
    },
})

export const Project: React.FC = () => {
    const classes = useStyles()
    const dispatch = useDispatch<any>()

    useEffect(() => {
        dispatch(DataActions.fetchCards())
    }, [dispatch])

    return (
        <div className={classes.root}>
            <Header />
            <Hidden xsDown>
                <div className={classes.sideBar}>
                    <SideBar />
                </div>
            </Hidden>
            <div className={classes.cardList}>
                <CardList />
            </div>
        </div>
    )
}
