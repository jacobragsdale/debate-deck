import { createTheme } from '@material-ui/core/styles'
import { UserType } from '../state/dataTypes'
import { DEFAULT_USER } from './constants'

// utility functions
export default class DDUtils {
    static getProjectTitle() {
        const user: UserType = DEFAULT_USER
        if (user && user.displayName) {
            return user.displayName.split(' ')[0] + "'s ProjectStyles"
        } else {
            return 'Anonymous ProjectStyles'
        }
    }

    static getProjectTheme() {
        let theme
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
            ? (theme = createTheme({ palette: { type: 'dark' } }))
            : (theme = createTheme({ palette: { type: 'light' } }))
        return theme
    }

    static getDisplayName() {
        const user: UserType = DEFAULT_USER
        if (user && user.displayName) {
            return user.displayName.split(' ')[0]
        } else {
            return 'Sign In'
        }
    }

    static validateEmail(email: string): boolean {
        // eslint-disable-next-line
        const emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        return emailRegex.test(email);
    }
}
