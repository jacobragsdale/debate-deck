import React from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    InputBase,
    IconButton,
    Box,
    Hidden,
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'
import { useLocation } from 'react-router-dom'
import { headerStyles } from '../style/headerStyles'
import DDUtils from './DDUtils'

export const Header: React.FC = () => {
    const classes = headerStyles();

    return (
        <header className={classes.root}>
            <AppBar className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <div className={classes.iconSection}>
                        <IconButton
                            href="/dashboard"
                            className={classes.cardIcon}
                        ></IconButton>
                        <Hidden xsDown>
                            <Typography
                                variant="h5"
                                className={classes.iconTypography}
                                noWrap
                            >
                                Debate Deck
                            </Typography>
                        </Hidden>
                    </div>
                    <Box
                        className={classes.searchBar}
                        hidden={useLocation().pathname !== '/project'}
                    >
                        <SearchIcon className={classes.searchIcon} />
                        <InputBase
                            placeholder="Search"
                            className={classes.searchInput}
                        />
                    </Box>
                    <div className={classes.grow} />
                    <IconButton href="/signin" className={classes.accountIcon}>
                        <AccountCircleOutlinedIcon />
                        <Hidden xsDown>
                            <Typography className={classes.accountTypography}>
                                {DDUtils.getDisplayName()}
                            </Typography>
                        </Hidden>
                    </IconButton>
                    <div className={classes.iconWrapper}>
                        <IconButton href="/help" className={classes.helpIcon}>
                            <HelpOutlineIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </header>
    )
}
