import React from 'react';
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
import { TagType } from '../state/dataTypes';
import { useDispatch, useSelector } from 'react-redux';
import ReduxActions from '../state/ReduxActions';

export const SideBar: React.FC = () => {
    const dispatch = useDispatch<any>();
    const classes = sideBarStyles();

    // get tags from redux
    const tags: TagType[] = useSelector((state: any) => {
        return state.tags;
    });

    const onCheckboxClick = (label: string, isChecked: boolean) => {
        const newTag: TagType = {label: label, isChecked: isChecked};
        dispatch(ReduxActions.storeTag(newTag));
    };

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
                        <ListItem className={classes.filterListItem} key={tag.label}>
                            <ListItemIcon>
                                <Checkbox
                                    className={classes.filterListCheckbox}
                                    checked={tag.isChecked}
                                    onChange={(checked) => {
                                        onCheckboxClick(tag.label, checked.target.checked);
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText
                                id={tag.label}
                                primary={tag.label}
                                className={classes.filterListTypography}
                            />
                        </ListItem>
                    ))}
                </List>
            </div>
        </div>
    )
}
