import { makeStyles, alpha } from '@material-ui/core/styles';
import DDUtils from '../components/DDUtils';

const theme = DDUtils.getProjectTheme();
// Dark Mode / Light Mode

//light mode shadows
let myInsetBoxShadow = 'inset 2px 2px 5px #999999, inset -2px -2px 5px #ffffff';
let mySearchBackground = 'linear-gradient(145deg, #e1e1e1, #ffffff)';
let myBoxShadow = '5px 5px 10px #999999, -5px -5px 10px #ffffff';
let myInsetSearchShadow =
    'inset 2px 2px 5px #999999, inset -2px -2px 4px #ffffff';
let myHoverSearchShadow =
    'inset 4px 4px 8px #999999, inset -4px -4px 8px #ffffff';
if (theme.palette.type === 'dark') {
    //dark mode shadows
    myInsetBoxShadow = 'inset 2px 2px 5px #282828, inset -2px -2px 5px #5c5c5c';
    mySearchBackground = 'linear-gradient(145deg, #3b3b3b, #474747)';
    myBoxShadow = '5px 5px 10px #282828, -5px -5px 10px #5c5c5c';
    myInsetSearchShadow =
        'inset 2px 2px 5px #282828, inset -2px -2px 4px #5c5c5c';
    myHoverSearchShadow =
        'inset 4px 4px 8px #282828, inset -4px -4px 8px #5c5c5c';
}
// Styling
export const headerStyles = makeStyles({
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
});
