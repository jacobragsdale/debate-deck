import React, { useEffect } from 'react'
import { CardList } from './card-list/CardList'
import { SideBar } from './SideBar'
import { Header } from './Header'
import { Hidden } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import DataActions from '../state/DataActions'
import { projectStyles } from '../style/projectStyles'

export const Project: React.FC = () => {
    const classes = projectStyles();
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
