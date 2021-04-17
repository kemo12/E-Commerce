import React from 'react'
import {AppBar,Toolbar,IconButton,Badge,MenuItem,Menu, Typography} from "@material-ui/core";
import {ShoppingCart} from "@material-ui/icons";
import useStyles from './styles';
import logo from "../../assetes/commerce.png";
import {Link,useLocation} from "react-router-dom";
const Navbar = ({totalItems}) => {
    const classes = useStyles();
    const location=useLocation();
   
    return (
        <>
          <AppBar position="fixed" className={classes.appBar} color= "inherit">
              <Toolbar>
                  <Typography variant="h6" component={Link} to="/" className={classes.title} color="inherit">
                      <img src={logo} alt="Commerce.js" height="250px" className={classes.image}/>
                      Commerce.js
                  </Typography>
                  <div className={classes.grow}></div>
                  {location.pathname==="/"&&(
                  <div className={classes.button}>
                      <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit" >
                        <Badge badgeContent={totalItems} color="secondary ">
                            <ShoppingCart />
                        </Badge>
                      </IconButton>
                  </div>)}
              </Toolbar>
              </AppBar>  
        </>
    )
}

export default Navbar;
