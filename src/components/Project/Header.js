import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { typography, breakpoints } from "@material-ui/system";
import styled from "styled-components";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styleFunction = breakpoints(typography);
const Box = styled.div`
  ${styleFunction}
`;

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

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

export default function Header() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
  container
  direction="column"
  justify="center"
  alignItems="center"
  spacing={1}>
    <Grid item xs={12} s={7} m={6} lg={6} xl={4}>
    <Paper className={classes.paper}>
    <Box xs={{ fontSize: 28 }} sm={{ fontSize: 30 }} md={{ fontSize: 40 }}>
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Game Generator</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          In this project, I created a Game Generator that will generate a game based on the year a user enter's. The technology that I used were HTML, JQuery, and a third party API named Board Game Atlas.
          </Typography>
        </AccordionDetails>
        <Grid container item lg={7}>
          <Typography component="div">
          <Box textAlign="justify" m={1}>
      <Link href="https://swefuture20.github.io/Game-Generator/">  Game Generator
        </Link>
        </Box>
        </Typography>
        </Grid>
      </Accordion>
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Instructional Node JS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          In this project, I had to test my knowledge and skills with explaining the code that I had written. This was the first time that I had used node and install dependencies such as inquirer. It was the beginning of learning on how to code on the backend.
          </Typography>
        </AccordionDetails>
        <Grid container item lg={7}>
          <Typography>
      <Link href="https://drive.google.com/file/d/1qjSTUUAZ66wpI_wj1160uiJl0tW8m1It/view">  Video to Instructional Node JS 
        </Link>
        </Typography>
        </Grid>
      </Accordion>
      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Basket of Puppies</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          In this project, I had the pleasure of work with three additional people, Wendi Freedman, Elan Zinkow, and Jordan Behn. I was a part of the front-end team but I focused on the login authentication with passport, bcrypt, express-session, and etc. I created a table for Users to store their user name and hashed password with sequelize and GET and POST routes for users to register and login. This project was successful and I'm proud of the team because we deployed the app to Heroku.
          </Typography>
          
        </AccordionDetails>
        <Grid container item lg={7}>
          <Typography>
      <Link href="https://github.com/SWEFuture20/React-Portfolio-One/tree/main">  Basket Of Puppies
        </Link>
        </Typography>
        </Grid>
      </Accordion>
      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Employee Tracker</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          In this project, I had to create three tables in adatabase and use JOINS to retrieve data information from the database collectively
          </Typography>
        </AccordionDetails>
        <Grid container item lg={7}>
          <Typography>
      <Link href="https://drive.google.com/file/d/1Y1kd8ryc-_whwMBY2YWJRYsN3aadzEiU/view">  Video to Employee Tracker
        </Link>
        </Typography>
        </Grid>
      </Accordion>
      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Eat Da Burger</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          In this project, The goal set for me was to become better with mySQL and deploying an application and connecting JAWSDB to Heroku.
          </Typography>
        </AccordionDetails>
        <Grid container item lg={7}>
          <Typography>
      <Link href="https://finish-the-burger.herokuapp.com/burgers">  Eat Da Burger
        </Link>
        </Typography>
        </Grid>
      </Accordion>
      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Employee Summary</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          In this App, The goal for this app was to create a way to add employees using class constructors. The technology that was used for this app were inquirer, path, and file (dependencies) and node js. 
          </Typography>
          <Grid container item lg={7}>
          <Typography component="div">
          <Box textAlign="justify" m={1}>
      <Link href="https://drive.google.com/file/d/1qQC210gKqOJbNF795RRekV0mz-3oBd0z/view">  Video to Employee Summary
        </Link>
        </Box>
        </Typography>
        </Grid>
        </AccordionDetails>
      </Accordion>
      </Box>
      </Paper>
      </Grid>
      </Grid>
    </div>
  );
}
