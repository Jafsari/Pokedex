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

    componentDidMount(){
      this.props.setPokemon(false)
      this.props.setBerries(false)
      this.props.setEvolution(false)
      this.props.setGames(false)
      this.props.setLocations(false)
      this.props.setItems(false)
      this.props.setNatures(false)
      this.props.setMoves(false)
      this.props.setStream(false)
    }

    handleChange = (e) => {
        this.setState({
             [e.target.name]: e.target.value
           });
     }
     

 handleRequest = (e) => {
     e.preventDefault();
     if (this.props.placeholder === 'Search Pokemon'){
    this.props.search({Pokemon:this.state.Search.toLowerCase()}).then((response) => {
        this.setState({Search:""})
    }).then(() => {
        this.props.ability({Effect:this.props.pokemon.abilities[0].ability.name})
    })
    .catch((error => {
        this.setState({Search:""})
    }))
  }
  if (this.props.placeholder ==='Search Berries'){
    this.props.berries({Berries:this.state.Search.toLowerCase()}).then((response) => {
      this.setState({Search:""})
    }).catch(( error => {
      this.setState({Search:""})
    }))
  }
  if (this.props.placeholder ==='Search Moves'){
    this.props.moves({Moves:this.state.Search.toLowerCase()}).then((response) => {
      this.setState({Search:""})
    }).catch( error => {
      this.setState({Search:""})
    })
  }
  if (this.props.placeholder ==='Search Items'){
    this.props.items({Item:this.state.Search.toLowerCase()}).then((response) => {
      this.setState({Search:""})
    }).catch( error => {
      this.setState({Search:""})
    })
  }
  if (this.props.placeholder ==='Search Locations'){
    this.props.locations({Location:this.state.Search.toLowerCase()}).then((response) => {
      this.setState({Search:""})
    }).catch( error => {
      this.setState({Search:""})
    })
  }
  if (this.props.placeholder ==='Search Regions'){
    this.props.games({Game:this.state.Search.toLowerCase()}).then((response) => {
      this.setState({Search:""})
    }).catch( error => {
      this.setState({Search:""})
    })
  }
  if (this.props.placeholder ==='Search Natures'){
    this.props.natures({Nature:this.state.Search.toLowerCase()}).then((response) => {
      this.setState({Search:""})
    }).catch( error => {
      this.setState({Search:""})
    })
  }
  if (this.props.placeholder === 'Search Evolutions'){
    this.props.evolutions({Pokemon:this.state.Search.toLowerCase()}).then((response) => {
        this.setState({Search:""})
    }).then(() => {
      this.props.search({Pokemon:this.props.evolution.chain.evolves_to[0].species.name})
  })
    .catch((error => {
        this.setState({Search:""})
    }))
  }
  if (this.props.placeholder ==='Search Streams'){
    this.props.setStream(this.state.Search)
    this.setState({Search:" "})
  }
  if (this.props.placeholder ==='Search Cards'){
    this.props.cards({Cards:this.state.Search.toLowerCase()}).then((response) => {
      this.setState({Search:""})
    }).catch( error => {
      this.setState({Search:""})
    })
  }
}

  render() {      
    const { classes } = this.props;
    return (
      <div>
      <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleRequest}>
        <TextField
          id="full-width"
          label="Search"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder={this.props.placeholder}
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
      </div>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => { 
    return { 
      pokemon:state.search.pokemon,
      evolution: state.evolution.evolutions
      };
  };
  

export default compose(
    withStyles(styles),
    connect(mapStateToProps,actions)
)
(TextFields);

