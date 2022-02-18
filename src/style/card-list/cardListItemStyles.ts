import DDUtils from '../../components/DDUtils'
import { makeStyles } from '@material-ui/core/styles'

const theme = DDUtils.getProjectTheme()

//light mode shadows
let myCardBackground = '#ffffff'
let myNormalShadow =
    '5px 5px 10px #999999, -5px -5px 10px #ffffff, inset 5px 5px 10px #999999, inset -5px -5px 10px #ffffff'
let myHoverShadow =
    '8px 8px 16px #999999, -8px -8px 16px #ffffff, inset 0px 0px 0px #ffffff, inset 0px 0px 0px #999999'

if (theme.palette.type === 'dark') {
    //dark mode shadows
    myCardBackground = 'linear-gradient(145deg, #2b2b2b, #333333)'
    myNormalShadow =
        '5px 5px 10px #282828, -5px -5px 10px #383838, inset 5px 5px 10px #242424, inset -5px -5px 10px #3c3c3c'
    myHoverShadow =
        '8px 8px 16px #282828, -8px -8px 16px #383838, inset 0px 0px 0px #242424, inset 0px 0px 0px #3c3c3c'
}

export const cardListItemStyles = makeStyles({
    card: {
        margin: theme.spacing(2),
        padding: theme.spacing(2),
        maxWidth: 1200,
        marginRight: 'auto',
        marginLeft: 'auto',
        border: 0,
        borderRadius: 24,
        background: myCardBackground,
        boxShadow: myNormalShadow,
        '&:hover': {
            boxShadow: myHoverShadow,
        },
    },
    information: {
        display: 'flex',
    },
    cardTitle: {
        textAlign: 'left',
        margin: theme.spacing(0, 0, 1.5, 0),
        color: theme.palette.text.primary,
    },
    leftPanel: {
        flexGrow: 1,
        minWidth: '30%',
    },
    citation: {
        textAlign: 'left',
        noWrap: true,
        color: theme.palette.text.secondary,
    },
    chip: {
        margin: theme.spacing(0.5),
        color: theme.palette.text.secondary,
    },
    rightPanel: {
        flexGrow: 1,
    },
    quote: {
        margin: theme.spacing(1),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
})