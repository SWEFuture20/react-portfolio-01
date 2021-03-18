import React from "react";
import { typography, breakpoints } from "@material-ui/system";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// can't be inlined in the template string for proper type inference in TypeScript
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const styleFunction = breakpoints(typography);
const Box = styled.div`
  ${styleFunction}
`;

/**
 * Outputs:
 *
 * font-size: 12px;
 * @media (min-width: 600px) {
 *   font-size: 18px;
 * }
 * @media (min-width: 960px) {
 *   font-size: 24px;
 * }
 */
export default function Body() {
  const classes = useStyles();
  return (

    <Box xs={{ fontSize: 28 }} sm={{ fontSize: 30 }} md={{ fontSize: 30 }}>
      <div className={classes.root}> 
      <Grid
  container
  direction="column"
  justify="center"
  alignItems="center"
  spacing={3}>
        <Grid item xs={4}>
        <Paper className={classes.paper}>
            <p>Hello Everyone, I am a programmer and I'm seeking a position as a full-time software engineer. On this website, I have shared a couple of projects that I have completed within the past two months.</p>
            </Paper>
            </Grid>
         </Grid>
        </div>
    </Box>
  );
}
