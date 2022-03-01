import React, { useState } from 'react';
import {
    Typography,
    Button,
    List,
    ListItem,
    Checkbox,
    ListItemText,
    ListItemIcon
} from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { sideBarStyles } from '../style/sideBarStyles';
import { TagType } from '../state/dataTypes';
import { useDispatch, useSelector } from 'react-redux';
import ReduxActions from '../state/ReduxActions';
import { AddCardModal } from './AddCardModal';

export const SideBar: React.FC = () => {
    const dispatch = useDispatch<any>();
    const classes = sideBarStyles();

    // The variable that determines if the modal is open or not.
    // first is the data, second is the function to update the data
    // useState is a react function that returns two values.
    // Boolean state and a function to update that state
    const [modelIsOpen, setModalIsOpen] = useState<boolean>(false);

    // get tags from redux
    const tags: TagType[] = useSelector((state: any) => {
        return state.tags;
    });

    const onCheckboxClick = (label: string, isChecked: boolean) => {
        const newTag: TagType = { label: label, isChecked: isChecked };
        dispatch(ReduxActions.storeTag(newTag));
    };

    const onAddCard = () => {
        // function to toggle visibility of new card component
        setModalIsOpen(true);
    };

    return (
        <div className={classes.root}>
            <Button
                variant='outlined'
                size='large'
                startIcon={<AddCircleOutlineOutlinedIcon />}
                className={classes.addIcon}
                onClick={onAddCard}
            >
                Add Card
            </Button>
            <AddCardModal isOpen={modelIsOpen} setIsOpen={setModalIsOpen}>

            </AddCardModal>
            <div className={classes.filter}>
                <Typography variant='h6' className={classes.filterTitle}>
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
    );
};
