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
                Username:"",
                Password:""
          }
      }

  render() {      
    const { classes } = this.props;
    return (
      <div>
      <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleRequest}>
        <TextField
          id="full-width"
          label="Username"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder={this.props.placeholder}
          fullWidth
          margin="normal"
          onChange={this.handleChange}
          name="Username"
          type="text"
          id="Username"
          value={this.state.Search} 
           />
            <TextField
          id="full-width"
          label="Password"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder={this.props.placeholder}
          fullWidth
          margin="normal"
          onChange={this.handleChange}
          name="Password"
          type="text"
          id="Password"
          value={this.state.Search} 
           />
           {this.props.secondText}
           <span>
               <button className='button'> Submit </button>
            </span>
      </form> 
      </div>
    );
  }
}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(TextFields);