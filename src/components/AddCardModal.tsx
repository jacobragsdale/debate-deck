import React, { useState } from 'react';
import {
    Typography,
    Button,Box, Dialog, TextField, Checkbox, FormControlLabel
} from '@material-ui/core';
import { newCardModalStyles } from '../style/newCardModalStyles';
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
    const classes = newCardModalStyles();

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
        
        //TODO: if card isn't saved, prompt users before clearing modal 
        
        // function to toggle visibility of new card component
        setIsOpen(false);

    };

    const onSubmit = () => {
        // create a CardType object
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
        // close modal after save
        onClickExit();
    };

    return (
        <Dialog
            onClose={onClickExit}
            open={isOpen}
            className={classes.root}
            fullWidth={true}
            maxWidth={"md"}

        >
            
            <Box className={classes.box}>
                <div className={classes.textColumn}>
                    <TextField
                    required
                    label='Tag / Title'
                    variant='outlined'
                    className={classes.textField}
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                />
                <TextField
                    required
                    label='Authors'
                    variant='outlined'
                    className={classes.textField}
                    onChange={(event) => {
                        setAuthors([event.target.value]);
                    }}
                />
                <TextField
                    label='Time'
                    variant='outlined'
                    className={classes.textField}
                    onChange={(event) => {
                        setTime(event.target.value);
                    }}
                />
                <div className={classes.proConDiv}>
                <FormControlLabel
                    control={<Checkbox />}
                    label="Pro"
                    labelPlacement="end"
                />
                <FormControlLabel
                    value="top"
                    control={<Checkbox />}
                    label="Con"
                    labelPlacement="end"
                />
                </div>
                </div>
                <div className={classes.textColumn}>
                <TextField
                    label='Publisher'
                    variant='outlined'
                    className={classes.textField}
                    onChange={(event) => {
                        setPublisher(event.target.value);
                    }}
                />
                <TextField
                    label='Article Title'
                    variant='outlined'
                    className={classes.textField}
                    onChange={(event) => {
                        setArticleTitle(event.target.value);
                    }}
                />
                <TextField
                    required
                    label='Link'
                    variant='outlined'
                    className={classes.textField}
                    onChange={(event) => {
                        setLink(event.target.value);
                    }}
                />
                <TextField
                    label='Tags (comma seperated)'
                    variant='outlined'
                    className={classes.textField}
                    onChange={(event) => {
                        setTags(event.target.value.split(','));
                    }}
                />
                </div>
                <div className={classes.quoteColumn}>
                <TextField
                    required
                    label='Quote'
                    multiline
                    variant='outlined'
                    className={classes.quoteField}
                    rows={8}
                    onChange={(event) => {
                        setQuote(event.target.value);
                    }}
                />
                    <div> 
                        <Button 
                            onClick={onClickExit}
                            className={classes.closeButton}
                            variant="outlined"
                        >
                            <Typography> Delete </Typography>
                        </Button>
                        <Button 
                            onClick={onSubmit}
                            className={classes.saveButton}
                            variant="contained"
                        >
                            <Typography> save </Typography>
                        </Button> 
                    </div>
                </div>


            </Box>


        </Dialog>
    );
};
