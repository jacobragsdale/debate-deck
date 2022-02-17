import { createTheme } from '@material-ui/core/styles'
import { UserType } from '../state/dataTypes'
import { DEFAULT_USER } from './constants'

// utility functions
export default class DDUtils {
    static getProjectTitle() {
        const user: UserType = DEFAULT_USER
        if (user && user.displayName) {
            return user.displayName.split(' ')[0] + "'s Project"
        } else {
            return 'Anonymous Project'
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
}
