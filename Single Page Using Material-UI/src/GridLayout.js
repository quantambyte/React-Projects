import React from 'react';
import Grid from '@material-ui/core/Grid';


import MainGridItem from './MainGridItem';
import GridItem from './GridItem';


export default function GridLayout() {


    return(

        // main grid
        <Grid container spacing = {3}>

            {/* 1st row */}
            {/* 1st item will take 12 columns on large screen */}
            <Grid item lg = {12} sm = {12} xs = {12}>

                <MainGridItem />

            </Grid>


            {/* 2nd row */}
            {/* 2nd row or 2nd grid item  1st column*/}
            <Grid item lg = {6} md = {6} sm = {12} xs = {12}>

                <GridItem 
                title = 'MERN Stack '
                image = 'https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_960_720.png'

                description = 'The Description of Course'
                imageTitle = 'MERN Stack'

                />
                
            </Grid>

            {/* 2nd row 2nd column */}
            <Grid item md = {6} sm = {12} xs = {12}>

                <GridItem 
                title = 'Python Masterclass'
                image = 'https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198_960_720.jpg'

                description = 'The Description of Course'
                imageTitle = 'MERN Stack'
                />
                
            </Grid>


            {/* 3rd row */}
            {/* 1st column */}
            <Grid item md = {4} sm = {12} xs = {12}>


             <GridItem 
             title = 'Icon Pack'
             image = 'https://cdn.pixabay.com/photo/2017/03/30/14/49/icons-2188729_960_720.png'

             description = 'The Description of Course'
             imageTitle = 'MERN Stack'
             />

            </Grid>

            {/* 2nd column */}
            <Grid item md = {4} sm = {12} xs = {12}>


                <GridItem 
                title = 'HTML CSS'
                image = 'https://cdn.pixabay.com/photo/2016/09/08/04/12/programmer-1653351_960_720.png'

                description = 'The Description of Course'
                imageTitle = 'MERN Stack'
                />

            </Grid>


            {/* 3rd column */}
            <Grid item md = {4} sm = {12} xs = {12}>


                <GridItem 
                title = 'Ethical Hacking '
                image = 'https://cdn.pixabay.com/photo/2018/01/26/18/21/matrix-3109378_960_720.jpg'

                description = 'The Description of Course'
                imageTitle = 'MERN Stack'
                />

            </Grid>

        </Grid>
    );

}