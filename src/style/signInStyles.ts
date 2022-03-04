import { makeStyles } from '@material-ui/core/styles';
import DDUtils from '../components/DDUtils';

const theme = DDUtils.getProjectTheme();

export const signInStyles = makeStyles({
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
});
