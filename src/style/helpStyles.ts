import { makeStyles } from '@material-ui/core/styles';
import DDUtils from '../components/DDUtils';

const theme = DDUtils.getProjectTheme();

export const helpStyles = makeStyles({
    root: {
        background: theme.palette.background.default,
        width: '100%',
        height: '100%',
        position: 'absolute',
        padding: theme.spacing(10, 2),
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        color: theme.palette.text.primary,
    },
    projectCard: {
        margin: theme.spacing(2),
        padding: theme.spacing(2),
        borderRadius: 24,
        background: theme.palette.background.paper,
    },
});
