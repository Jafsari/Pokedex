import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { compose } from 'redux';
import axios from 'axios';
import { Icon } from 'react-icons-kit';
import {ic_search} from 'react-icons-kit/md/ic_search';
import { APIRequest } from '../helper'
import Button from '@material-ui/core/Button';
import '../styles/login.css';
import '../styles/loginLabel.css';


const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    menu: {
      width: 200,
    },
  });
  
  
  class TextFields extends React.Component {
      constructor(props){
          super(props)
          this.state = {
                username:"",
                password:""
          }
      }

      handleChange = (e) => {
        this.setState({
             [e.target.name]: e.target.value
           });
     }



     handleRequest = (e) => {
        e.preventDefault();
        if (this.props.name){
        this.props.login(this.state)
        } else {
        this.props.signup(this.state)
        }
      }
  render() {
    const Button = ( this.props.name ? (
       <button className='button'> Login </button>
      ) : (
        <button onClick={this.handleSignUp} className='button'> Signup </button>
      ));
    const { classes } = this.props;
    return (
      <div>
      <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleRequest}>
        <TextField className='transition'
          id="full-width"
          label="username"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder={this.props.placeholder}
          fullWidth
          margin="normal"
          onChange={this.handleChange}
          name="username"
          type="text"
          id="username"
          value={this.state.Search} 
           />
            <TextField className='transition'
          id="full-width"
          label="password"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder={this.props.placeholder}
          fullWidth
          margin="normal"
          onChange={this.handleChange}
          name="password"
          type="password"
          id="password"
          value={this.state.Search} 
           />
           {this.props.secondText}
           <span>
               {Button}
            </span>
      </form> 
      </div>
    );
  }
}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
  };


  export default compose(
   withStyles(styles),
   connect(null,actions)
  )
  (TextFields)

//   export default compose(
//     withStyles(styles),
//     connect(mapStateToProps,actions)
// )
// (TextFields);