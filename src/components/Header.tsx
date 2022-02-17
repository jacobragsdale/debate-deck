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
import { makeStyles, alpha } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'
import { useLocation } from 'react-router-dom'
import DDUtils from './DDUtils'

const theme = DDUtils.getProjectTheme()
// Dark Mode / Light Mode

//light mode shadows
let myInsetBoxShadow = 'inset 2px 2px 5px #999999, inset -2px -2px 5px #ffffff'
let mySearchBackground = 'linear-gradient(145deg, #e1e1e1, #ffffff)'
let myBoxShadow = '5px 5px 10px #999999, -5px -5px 10px #ffffff'
let myInsetSearchShadow =
    'inset 2px 2px 5px #999999, inset -2px -2px 4px #ffffff'
let myHoverSearchShadow =
    'inset 4px 4px 8px #999999, inset -4px -4px 8px #ffffff'
if (theme.palette.type === 'dark') {
    //dark mode shadows
    myInsetBoxShadow = 'inset 2px 2px 5px #282828, inset -2px -2px 5px #5c5c5c'
    mySearchBackground = 'linear-gradient(145deg, #3b3b3b, #474747)'
    myBoxShadow = '5px 5px 10px #282828, -5px -5px 10px #5c5c5c'
    myInsetSearchShadow =
        'inset 2px 2px 5px #282828, inset -2px -2px 4px #5c5c5c'
    myHoverSearchShadow =
        'inset 4px 4px 8px #282828, inset -4px -4px 8px #5c5c5c'
}
// Styling
const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    appBar: {
        backgroundColor: alpha(theme.palette.background.paper, 0.85),
        position: 'fixed',
        borderRadius: theme.spacing(0, 0, 2, 2),
        backdropFilter: 'blur(20px)',
    },
    toolbar: theme.mixins.toolbar,
    grow: {
        flexGrow: 1,
    },
    iconSection: {
        display: 'flex',
        minWidth: 70,
        margin: theme.spacing(0, -3, 0, 0),
        flexgrow: 1,
    },
    cardIcon: {
        flexGrow: 0,
        margin: theme.spacing(0, -1, 0, -2),
    },
    iconTypography: {
        flexGrow: 0,
        color: theme.palette.text.secondary,
        margin: theme.spacing(0, 5, 0, 0),
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    searchBar: {
        position: 'relative',
        flexGrow: 1,
        minWidth: 150,
        maxWidth: 600,
        borderRadius: 12,
        margin: theme.spacing(1, 0),
        background: mySearchBackground,
        boxShadow: myInsetSearchShadow,
        transition: theme.transitions.create(['box-shadow']),
        '&:hover': {
            boxShadow: myHoverSearchShadow,
        },
    },
    searchIcon: {
        position: 'absolute',
        color: theme.palette.text.secondary,
        marginLeft: theme.spacing(2),
        height: '100%',
        padding: theme.spacing(0, 0),
    },
    searchInput: {
        display: 'flex',
        color: theme.palette.text.secondary,
        margin: theme.spacing(1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    },
    accountIcon: {
        color: theme.palette.text.secondary,
        boxShadow: myBoxShadow,
        borderRadius: 12,
        padding: theme.spacing(1.5, 2),
        margin: theme.spacing(1, 1),
    },
    accountTypography: {
        marginLeft: theme.spacing(1),
    },
    helpIcon: {
        color: theme.palette.text.secondary,
        boxShadow: myInsetBoxShadow,
        borderRadius: 12,
        padding: theme.spacing(1, 1),
        margin: theme.spacing(0.5, 0.5),
    },
    iconWrapper: {
        color: theme.palette.text.secondary,
        margin: theme.spacing(1, 1),
        padding: theme.spacing(0, 0),
        boxShadow: myBoxShadow,
        borderRadius: 12,
    },
})

export const Header: React.FC = () => {
    const classes = useStyles()

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
