import React from 'react';
import { AppBar, Toolbar, IconButton, List, ListItem, ListItemText, Container } from '@material-ui/core'
import { Home } from '@material-ui/icons'
import { BrowserRouter as Router, Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'

const navLinks = [
    { title: `Login`, path: `/login` },
    { title: `Signup`, path: `/signup` },
];

const useStyles = makeStyles({
	navDisplayFlex: {
		display: `flex`,
		justifyContent: `space-between`
	},
	linkText: {
		textDecoration: `None`,
		textTransform: `uppercase`,
		color: `white`
	},
	navbarDisplayFlex: {
		display: `flex`,
		justifyContent: `space-between`
	}
});


const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position='static'>
           <Toolbar>
		<Container className={classes.navbarDisplayFlex}>
                <IconButton edge="start" color="inherit" aria-label="home">
                    <Home fontSize="large" />
                </IconButton>
		<Router>
		<List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
			{
				navLinks.map( ({title, path}) => (
					<Link to={path} className={classes.linkText}>
						<ListItem button>
							<ListItemText primary={title}/>
						</ListItem>
					</Link>
				))
			}
		</List>
		</Router>
		</Container>
           </Toolbar>
        </AppBar>
    )
}

export default Header;
