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
            data:false,
            Search:""
        }
    }


    handleChange = (e) => {
        this.setState({
             [e.target.name]: e.target.value
           });
     }
     

 handleRequest = (e) => {
     e.preventDefault();
    this.props.search({Pokemon:this.state.Search.toLowerCase()}).then((response) => {
        this.setState({Search:""})
    }).then(() => {
        this.props.ability({Effect:this.props.pokemon.abilities[0].ability.name})
    })
    .catch((error => {
        this.setState({Search:""})
    }))

  }

  render() {
      
    const { classes } = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleRequest}>
        <TextField
          id="full-width"
          label="Search"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="Search Pokemon"
          helperText="Trust us!"
          fullWidth
          margin="normal"
          onChange={this.handleChange}
          name="Search"
          type="text"
          id="Search"
          value={this.state.Search} 
           />
           <span>
            <Icon icon={ic_search} />
            </span>
      </form>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => { 
    return { 
      pokemon:state.search.pokemon
      };
  };
  

export default compose(
    withStyles(styles),
    connect(mapStateToProps,actions)
)
(TextFields);

