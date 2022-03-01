import React, { useState } from 'react';
import {
    Typography,
    Button,
    Box, Dialog, TextField
} from '@material-ui/core';
import { sideBarStyles } from '../style/sideBarStyles';
import { CardType } from '../state/dataTypes';
import { useDispatch } from 'react-redux';
import DataActions from '../state/DataActions';
import { v4 as uuid } from 'uuid';

// This checks that data passed to this component is only a boolean value
interface AddCardModalProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void; // react functions to set state return void. or maybe
}

export const AddCardModal: React.FC<AddCardModalProps> = ({ isOpen, setIsOpen }) => {
    const dispatch = useDispatch<any>();
    const classes = sideBarStyles();

    //we need a new state variable for every input field in
    // order to pass the information to the redux store
    const [title, setTitle] = useState<string>('');
    const [authors, setAuthors] = useState<string[]>([]);
    const [time, setTime] = useState<string>('');
    const [publisher, setPublisher] = useState<string>('');
    const [articleTitle, setArticleTitle] = useState<string>('');
    const [link, setLink] = useState<string>('');
    const [tags, setTags] = useState<string[]>([]);
    const [quote, setQuote] = useState<string>('');

    const onClickExit = () => {
        // function to toggle visibility of new card component
        setIsOpen(false);

    };

    const onSubmit = () => {
        // create a CardType object
        console.log({ authors });
        console.log(typeof authors);
        const newCard: CardType = {
            id: uuid(),
            title: title,
            authors: authors,
            time: time,
            publisher: publisher,
            articleTitle: articleTitle,
            link: link,
            tags: tags,
            quote: quote
        };

        dispatch(DataActions.postCard(newCard));
    };

    return (
        <Dialog
            onClose={onClickExit}
            open={isOpen}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
        >
            <Box className={classes.root}>
                <Typography id='modal-modal-title' variant='h6' component='h2'>
                    Text in a modal
                </Typography>

                <TextField
                    required
                    label='Tag / Title'
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                />
                <TextField
                    required
                    label='Authors'
                    onChange={(event) => {
                        setAuthors([event.target.value]);
                    }}
                />
                <TextField
                    required
                    label='Time'
                    onChange={(event) => {
                        setTime(event.target.value);
                    }}
                />
                <TextField
                    required
                    label='Publisher'
                    onChange={(event) => {
                        setPublisher(event.target.value);
                    }}
                />
                <TextField
                    required
                    label='Article Title'
                    onChange={(event) => {
                        setArticleTitle(event.target.value);
                    }}
                />
                <TextField
                    required
                    label='Link'
                    onChange={(event) => {
                        setLink(event.target.value);
                    }}
                />
                <TextField
                    required
                    label='Tags (comma seperated)'
                    onChange={(event) => {
                        setTags(event.target.value.split(','));
                    }}
                />
                <TextField
                    required
                    label='Quote'
                    onChange={(event) => {
                        setQuote(event.target.value);
                    }}
                />
                <Button onClick={onSubmit}>
                    <Typography> save </Typography>
                </Button>
                <Button onClick={onClickExit}>
                    <Typography> close </Typography>
                </Button>

            </Box>


        </Dialog>
    );
};
