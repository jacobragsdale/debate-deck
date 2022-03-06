import React, { useState } from 'react';
import {
    Typography,
    Button,
    Box,
    Dialog,
    TextField,
    Checkbox,
    FormControlLabel,
} from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { newCardModalStyles } from '../style/newCardModalStyles';
import { CardType } from '../state/dataTypes';
import { useDispatch } from 'react-redux';
import DataActions from '../state/DataActions';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import moment from 'moment';

// This checks that data passed to this component is only a boolean value
interface AddCardModalProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void; // react functions to set state return void. or maybe
}

export const AddCardModal: React.FC<AddCardModalProps> = ({
    isOpen,
    setIsOpen,
}) => {
    const dispatch = useDispatch<any>();
    const classes = newCardModalStyles();

    //we need a new state variable for every input field in
    // order to pass the information to the redux store
    const [title, setTitle] = useState<string>('');
    const [authors, setAuthors] = useState<string[]>([]);
    const [date, setDate] = useState<Date>(new Date());
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
            id: 0,
            title: title,
            authors: authors,
            date: moment(date).format('YYYY-MM-DD'),
            publisher: publisher,
            articleTitle: articleTitle,
            link: link,
            tags: tags,
            quote: quote,
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
            maxWidth={'md'}
        >
            <form onSubmit={onSubmit} action="#">
                <Box className={classes.box}>
                    <div className={classes.textColumn}>
                        <TextField
                            required
                            label="Tag / Title"
                            variant="outlined"
                            className={classes.textField}
                            onChange={(event) => {
                                setTitle(event.target.value);
                            }}
                        />
                        <TextField
                            label="Authors"
                            variant="outlined"
                            className={classes.textField}
                            onChange={(event) => {
                                setAuthors([event.target.value]);
                            }}
                        />
                        <KeyboardDatePicker
                            variant="inline"
                            disableFuture={true}
                            inputVariant="outlined"
                            label={!date ? 'Date' : ''}
                            format="MM/DD/yyyy"
                            value={date}
                            onChange={(date: MaterialUiPickersDate) => {
                                setDate(date?.toDate()!);
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
                            label="Publisher"
                            variant="outlined"
                            className={classes.textField}
                            onChange={(event) => {
                                setPublisher(event.target.value);
                            }}
                        />
                        <TextField
                            label="Article Title"
                            variant="outlined"
                            className={classes.textField}
                            onChange={(event) => {
                                setArticleTitle(event.target.value);
                            }}
                        />
                        <TextField
                            required
                            label="Link"
                            variant="outlined"
                            className={classes.textField}
                            onChange={(event) => {
                                setLink(event.target.value);
                            }}
                        />
                        <TextField
                            label="Tags (comma seperated)"
                            variant="outlined"
                            className={classes.textField}
                            onChange={(event) => {
                                setTags(event.target.value.split(','));
                            }}
                        />
                    </div>
                    <div className={classes.quoteColumn}>
                        <TextField
                            required
                            label="Quote"
                            multiline
                            variant="outlined"
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
                                <Typography>Cancel</Typography>
                            </Button>
                            <Button
                                type="submit"
                                className={classes.saveButton}
                                variant="contained"
                            >
                                <Typography> save </Typography>
                            </Button>
                        </div>
                    </div>
                </Box>
            </form>
        </Dialog>
    );
};
