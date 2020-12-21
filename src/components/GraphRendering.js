import React from 'react';
// import {Bar}  from 'react-chartjs-2';
import BarChart from './charts/BarChart'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      background: "white",
    },
  }));

function GraphRendering() {
    const classes = useStyles();
    return (
        <div>
               <Grid container  spacing={3}>
                   <Grid xs={12}>
                       <Paper className={classes.paper}>
                           Hello
                       </Paper>
                   </Grid>
                <Grid  xs={12} style={{display : "flex"}}>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>
                        <BarChart /> 
                        </Paper>
                    </Grid>

                    <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <BarChart /> 
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <BarChart /> 
                        </Paper>
                    </Grid>
              </Grid>
            </Grid>
        </div>
    )
}

export default GraphRendering;
