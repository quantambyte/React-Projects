import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles( theme => ({

    MainGridContainer : {
        height : 400,
        backgroundImage : 'url(https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80)',
        backgroundSize : 'cover',
        backgroundRepeat : 'no-repeat',


        color: 'white'
    },

    GridItem : {
        textAlign : 'left',
        padding : theme.spacing(6),

        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'center'
    }

}));


export default function MainGridItem() {

    const classes = useStyles();

    return (
        <Grid container className = {classes.MainGridContainer}>

            <Grid item className = {classes.GridItem} md = {6}>

                <Typography component = 'h2' variant = 'h5 '>
                    Hello Coding
                </Typography>

                <Typography variant = 'body1' paragraph>
                    Do you have career goals, if yes this site is not for you. Do you have career goals, if yes this site is not for you. Do you have career goals, if yes this site is not for you. Do you have career goals, if yes this site is not for you. Do you have career goals, if yes this site is not for you. Do you have career goals, if yes this site is not for you. 
                </Typography>

            </Grid>
            

        </Grid>
    );

}