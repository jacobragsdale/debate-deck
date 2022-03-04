import { makeStyles } from '@material-ui/core/styles';
import DDUtils from '../components/DDUtils';

const theme = DDUtils.getProjectTheme();

export const projectStyles = makeStyles({
    root: {
        padding: theme.spacing(0),
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: theme.palette.background.default,
    },
    sideBar: {
        minWidth: 190,
        margin: theme.spacing(10, 1, 1, 1),
    },
    cardList: {
        margin: theme.spacing(10, 1, 1, 1),
        flexGrow: 1,
        minWidth: 350,
    },
});
