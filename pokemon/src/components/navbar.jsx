// import React from 'react';
// import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
// import '../styles/navbar.css'

// export default class Navigation extends React.Component {
//   constructor(props) {
//     super(props);

//     this.toggleNavbar = this.toggleNavbar.bind(this);
//     this.state = {
//       collapsed: true
//     };
//   }

//   toggleNavbar() {
//     this.setState({
//       collapsed: !this.state.collapsed
//     });
//   }
//   render() {
//     return (
//       <div>
//         <Navbar id="bg-light" color="light" light>
//         <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
//         <NavbarBrand href="/" id ="bg-light" className="mr-auto white poke">Pokedex</NavbarBrand>
//           <Collapse isOpen={!this.state.collapsed} navbar>
//             <Nav navbar>
//               <NavItem>
//                 <NavLink id="NavColor" >Pokemon</NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink id="NavColor" >About</NavLink>
//               </NavItem>
//             </Nav>
//           </Collapse>
//         </Navbar>
//       </div>
//     );
//   }
// }

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar color="secondary" position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Pokedex
          </Typography>
          <Button color="inherit">About</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default withStyles(styles)(ButtonAppBar);