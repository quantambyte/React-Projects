import React, { useEffect , useState }     from 'react';


import {
    Container,
    Toolbar,
    Typography,
    Box,
    Link,
    AppBar,
    Drawer,
    MenuItem

} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu';

import {makeStyles} from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({

    siteTitle : {

        fontWeight : 'bold',
        letterSpacing : 1.7,
        fontSize : '1.85rem',
        padding : 10
    },

    toolBar: {
        display : 'flex',
        flexDirection : 'column',

        [theme.breakpoints.up('md')] : {
            flexDirection : 'row',
            alignItems : 'flex-end',
            justifyContent : 'space-between'
        }
    },
    
    menuBox: {

        display : 'flex',
        flexDirection : 'column',

        [theme.breakpoints.up('md')] : {
            flexDirection : 'row'
        }
    },

    menuOptions : {
        padding: theme.spacing(1),
        color : 'white',

        [theme.breakpoints.up('md')]: {
            marginLeft : theme.spacing(10),
            padding : theme.spacing(1.2)
        }
    },

    menuIcon : {
        color : 'white'
    }

}));


export default function NavigationBar() {

    const [state, setState] = useState({
        toggleMenu: false,
        toggleMenuOpen: false
      });

    const { toggleMenu, toggleMenuOpen } = state;

    useEffect( () => {

        const setResponsiveness = () => {

            return window.innerWidth < 960 ?
            setState( (prevState) => ({ ...prevState , toggleMenu : true})) :
            setState( (prevState) => ({ ...prevState , toggleMenu : false}));

        };

        setResponsiveness();

        window.addEventListener( 'resize' , () => setResponsiveness());

    } , []);

    const classes = useStyles();

    const displayToggleMenu = () => {

        const handleToggleMenuOpen = () => setState((prevState) => ({
            ...prevState , toggleMenuOpen: true
        }));

        const handleToggleMenuClose = () => setState( (prevState) => ({ ...prevState , toggleMenuOpen : false}));

        return (
            <Toolbar>
                <IconButton
                    {...{
                        onClick : handleToggleMenuOpen
                    }}
                >
                    <MenuIcon className = {classes.menuIcon}/>
                </IconButton>

                <Drawer
                    { ... {
                        anchor: 'left',
                        open : toggleMenuOpen,
                        onClose: handleToggleMenuClose
                    }}
                >
                    <div>{getToggleMenuOptions()}</div>
                </Drawer>

            </Toolbar>
        );
    }

    const getToggleMenuOptions = () => {
        return (
            <Box>

                {['home' , 'courses' , 'sign up'].map((menuOptions) => (
                    <MenuItem>
                        {menuOptions}
                    </MenuItem>
                ))}

            </Box>
        );
    }

    const displayLargeMenu = () => {
       
        return(

            <Toolbar className = {classes.toolBar}>

                

            <Typography className = {classes.siteTitle}>
                Free Courses
            </Typography>

            <Box className = {classes.menuBox}>
                {['home' , 'courses' , 'sign up'].map((menuOptions) => (

                    <Link
                        component = 'button'
                        variant = 'body1'
                        className = {classes.menuOptions}
                    >
                        {menuOptions.toUpperCase()}
                    </Link>

                ))}
            </Box>

        </Toolbar>
        );

    }
    
    return (
        <Container>

            <AppBar>
                {toggleMenu ? displayToggleMenu() : displayLargeMenu()}
            </AppBar>

            
        </Container>
    );

}