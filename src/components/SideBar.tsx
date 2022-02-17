import React from 'react'
import {
    Typography,
    Button,
    List,
    ListItem,
    Checkbox,
    ListItemText,
    ListItemIcon,
} from '@material-ui/core'
import { makeStyles, alpha } from '@material-ui/core/styles'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined'
import DDUtils from './DDUtils'

const theme = DDUtils.getProjectTheme()

const useStyles = makeStyles({
    root: {
        backgroundColor: theme.palette.background.default,
        display: 'flex',
        flexDirection: 'column',
    },
    addIcon: {
        color: theme.palette.text.secondary,
        marginLeft: 'auto',
        marginRight: 'auto',
        margin: theme.spacing(1),
        borderRadius: 25,
        flexGrow: 1,
        backgroundColor: alpha(theme.palette.text.secondary, 0.1),
        transition: theme.transitions.create([
            'background-color',
            'box-shadow',
        ]),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.2),
            boxShadow: '0px 1px 2px 2px rgba(0,0,0,.2)',
        },
    },
    filter: {
        margin: theme.spacing(1),
        padding: theme.spacing(0),
    },
    filterTitle: {
        color: theme.palette.text.primary,
        margin: theme.spacing(0, 0, 1, 0),
    },
    filterList: {
        padding: theme.spacing(0),
    },
    filterListItem: {
        margin: theme.spacing(-1, -2),
    },
    filterListTypography: {
        color: theme.palette.text.secondary,
    },
    filterListCheckbox: {
        color: theme.palette.text.secondary,
    },
})

const tags = ['pro', 'con', 'tag1', 'tag2', 'tag3']

export const SideBar: React.FC = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Button
                variant="outlined"
                size="large"
                startIcon={<AddCircleOutlineOutlinedIcon />}
                className={classes.addIcon}
            >
                Add Card
            </Button>
            <div className={classes.filter}>
                <Typography variant="h6" className={classes.filterTitle}>
                    {' '}
                    Filter{' '}
                </Typography>
                <List className={classes.filterList}>
                    {tags.map((tag) => (
                        <ListItem className={classes.filterListItem} key={tag}>
                            <ListItemIcon>
                                <Checkbox
                                    className={classes.filterListCheckbox}
                                />
                            </ListItemIcon>
                            <ListItemText
                                id={tag}
                                primary={tag}
                                className={classes.filterListTypography}
                            />
                        </ListItem>
                    ))}
                </List>
            </div>
        </div>
    )
}
