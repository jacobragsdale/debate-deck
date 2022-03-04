import { makeStyles } from '@material-ui/core/styles';
import DDUtils from '../components/DDUtils';

const theme = DDUtils.getProjectTheme();

export const landerStyles = makeStyles({
    root: {
        background: theme.palette.background.default,
        width: '100%',
        height: '100%',
        position: 'absolute',
        padding: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
    },
    actionContainer: {
        minHeight: '300px',
        alignContent: 'center',
        display: 'flex',
    },
    card: {
        margin: theme.spacing(2),
        padding: theme.spacing(2),
        borderRadius: 24,
        background: theme.palette.background.paper,
    },
    title: {
        color: theme.palette.text.primary,
    },
    button: {
        background: theme.palette.primary.main,
        borderRadius: 10,
        minWidth: 130,
        minHeight: 40,
        margin: 'auto',
    },
});
