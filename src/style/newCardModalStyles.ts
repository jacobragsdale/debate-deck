import { makeStyles } from '@material-ui/core/styles'
import DDUtils from '../components/DDUtils'

const theme = DDUtils.getProjectTheme()

export const newCardModalStyles = makeStyles({
    root: {

    },
    box: {
        borderRadius: 24,
        margin: theme.spacing(1),
        minWidth: 800,
        alignItems: "center",
        display: "flex",
        flexwrap: "wrap",
    },
    textColumn: {
        minWidth: 250,
        flexDirection: "column",
        alignItems: "center",
        display: "flex",
        padding: theme.spacing(1),
    },
    quoteColumn: {
        margin: theme.spacing(1,0),
        alignItems: "center",
        justifyContent: 'flex-start',
        display: "flex",
        flexDirection: "column",
        flexGrow: 1

    },
    title: {
        color: theme.palette.text.primary,
    },
    saveButton: {
        background: theme.palette.primary.main,
        borderRadius: 10,
        width: 100,
        minHeight: 40,
        margin: theme.spacing(1),
    },
    closeButton: {
        color: theme.palette.error.light,
        borderRadius: 10,
        minWidth: 100,
        minHeight: 40,
        margin: theme.spacing(1),
    },
    textField: {
        margin: theme.spacing(.5,1),
        width: "100%"
    },
    quoteField: {
        margin: theme.spacing(1,2),
        width: "100%"
    },
    proConDiv: {
        height: 62,
        alignItems: "center",
        display: "flex",

    }
})
