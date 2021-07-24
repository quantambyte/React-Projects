import { Card, CardContent, CardHeader, CardMedia, CardActions, IconButton } from '@material-ui/core';
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { ArrowForward } from '@material-ui/icons';

const useStyles = makeStyles( theme => ({

    cardImage : {
        height: 200
    }

}));

export default function GridItem( props ) {

    const classes = useStyles();

    return (
        <Card>

            <CardHeader 
                title = {props.title}
                subheader = 'Recommended for you'
            />

            <CardMedia 
                className = {classes.cardImage}

                image = {props.image}
                title = {props.imageTitle}
            />

            <CardContent>
                <Typography>
                    {props.description}
                </Typography>
            </CardContent>
            

            <CardActions>

                <IconButton aria-label = 'Visit Page'>
                    <ArrowForward />
                </IconButton>

            </CardActions>

        </Card>
    );
}