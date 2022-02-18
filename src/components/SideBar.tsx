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
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined'
import { sideBarStyles } from '../style/sideBarStyles'
import { tags } from './constants'

export const SideBar: React.FC = () => {
    const classes = sideBarStyles();

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
