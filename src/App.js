import React from "react"
import { HashRouter, Route, Link } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FooterArea from './components/Footer/FooterArea'
import HeaderAbove from './pages/Header'
import Body from './components/Project/Body'
import Header from './components/Project/Header'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <HashRouter basename='/'>
  
    <div className={classes.root}>
    <Grid
  container
  direction="column"
  justify="center"
  alignItems="center"
  spacing={3}>
    <Paper className={classes.paper}>
      
        <Route exact path="/">
        <HeaderAbove />
        <Body />
        <Header />
        <FooterArea />
        </Route>
      
      </Paper>
      </Grid>
    </div>
  </HashRouter>
  );
}

export default App;
