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
import { useDispatch } from 'react-redux';
import ReduxActions from '../state/ReduxActions';

export const Header: React.FC = () => {
    const dispatch = useDispatch<any>();
    const classes = headerStyles();

    const handleSearch = (searchString: string) => {
        dispatch(ReduxActions.storeSearchString(searchString));
    }

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
                            onChange={(e) => {
                                handleSearch(e.target.value);
                            }}
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
