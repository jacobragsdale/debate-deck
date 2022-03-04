import React, { useState } from 'react';
import {
    Typography,
    Button,
    Grid,
    Paper,
    TextField,
    Link,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import DataActions from '../state/DataActions';
import { useHistory } from 'react-router-dom';
// import { signInStyles } from '../style/signInStyles'

export const SignIn: React.FC = () => {
    const history = useHistory();
    const dispatch = useDispatch<any>();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    // const classes = signInStyles();

    const handleSubmit = () => {
        if (dispatch(DataActions.login(email, password))) {
            history.push('/project');
        }
    };

    return (
        <div style={{ marginTop: '90px' }}>
            <Grid container spacing={0} justify="center" direction="row">
                <Grid item>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        spacing={2}
                        className="login-form"
                    >
                        <Paper
                            variant="elevation"
                            elevation={2}
                            className="login-background"
                        >
                            <Grid>
                                <Typography component="h1" variant="h5">
                                    Sign in
                                </Typography>
                            </Grid>
                            <Grid>
                                <form onSubmit={handleSubmit}>
                                    <Grid
                                        container
                                        direction="column"
                                        spacing={2}
                                    >
                                        <Grid item>
                                            <TextField
                                                type="email"
                                                placeholder="Email"
                                                fullWidth
                                                name="username"
                                                variant="outlined"
                                                value={email}
                                                onChange={(event) =>
                                                    setEmail(event.target.value)
                                                }
                                                required
                                                autoFocus
                                            />
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                type="password"
                                                placeholder="Password"
                                                fullWidth
                                                name="password"
                                                variant="outlined"
                                                value={password}
                                                onChange={(event) =>
                                                    setPassword(
                                                        event.target.value
                                                    )
                                                }
                                                required
                                            />
                                        </Grid>
                                        <Grid item>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                type="submit"
                                                className="button-block"
                                            >
                                                Submit
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Forgot Password?
                                </Link>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};
