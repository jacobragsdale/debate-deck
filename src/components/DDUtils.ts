import { createTheme } from '@material-ui/core/styles';
import { UserType } from '../state/dataTypes';
import { DEFAULT_USER } from './constants';

// utility functions
export default class DDUtils {
    static getProjectTitle(): string {
        const user: UserType = DEFAULT_USER;
        if (user && user.displayName) {
            return user.displayName.split(' ')[0] + "'s ProjectStyles";
        } else {
            return 'Anonymous ProjectStyles';
        }
    }

    static getProjectTheme() {
        let theme;
        // window.matchMedia &&
        // window.matchMedia('(prefers-color-scheme: dark)').matches
        //     ? (theme = createTheme({ palette: { type: 'dark' } }))
        //     : (theme = createTheme({ palette: { type: 'light' } }));
        theme = createTheme({ palette: { type: 'light' } });
        return theme;
    }

    static getDisplayName(): string {
        const user: UserType = DEFAULT_USER;
        if (user && user.displayName) {
            return user.displayName.split(' ')[0];
        } else {
            return 'Sign In';
        }
    }
}
