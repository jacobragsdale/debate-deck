// Import things.
import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Typography, Button } from "@material-ui/core";
import theme from "./projectTheme";
import firebase from "./firebaseComps";
import Header from "./header";

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/project",
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ]
};

//Styling for Material UI components
const useStyles = makeStyles({
  root: {
    background: theme.palette.background.default,
    width: "100%",
    height: "100%",
    position: "absolute",
    padding: theme.spacing(10, 0)
  },
  card: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    borderRadius: 24,
    maxWidth: 300,
    marginRight: "auto",
    marginLeft: "auto",
    background: theme.palette.background.paper,
    flexDirection: "column",
    alignItems: "center",
    display: "flex"
  },
  titleText: {
    color: theme.palette.text.primary,
    textAlign: "center",
    margin: theme.spacing(3)
  },
  button: {
    borderRadius: 10,
    margin: theme.spacing(1, 0, 0, 0)
  }
});

function getAccountDescription() {
  const user = firebase.auth().currentUser;
  if (user !== null) {
    return "You are currently signed in as " + user.displayName + ".";
  } else {
    return "You are currently not signed in.";
  }
}

function testThenFunction() {
  console.log(firebase.auth().currentUser);
}

function isSignedIn() {
  const user = firebase.auth().currentUser;
  if (user !== null) {
    return true;
  } else {
    return false;
  }
}

function SignInScreen() {
  //setup styling
  const classes = useStyles();
  testThenFunction();

  return (
    <div>
      <Header></Header>
      <div className={classes.root}>
        <Card className={classes.card}>
          <Typography variant="h4" className={classes.titleText}>
            Login
          </Typography>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </Card>
        <Card className={classes.card}>
          <Typography variant="body2"> {getAccountDescription()} </Typography>
          <Button
            className={classes.button}
            disabled={!isSignedIn()}
            variant="outlined"
            onClick={() => {
              firebase.auth().signOut();
            }}
            href="/"
          >
            Logout
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default SignInScreen;
