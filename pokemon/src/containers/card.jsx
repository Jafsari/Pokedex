import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { compose } from 'redux';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 50,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class RecipeReviewCard extends React.Component {
  state = { 
      expanded: false
 };
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  render() {
    const { classes } = this.props;
    var pokemon = this.props.information.types.map((poke,index) => {
        return (
          {poke}.poke.type.name.charAt(0).toUpperCase() + {poke}.poke.type.name.slice(1)
        )
    })
    var stats = this.props.information.stats.map((stat,index) => {
        return (
           {stat}.stat.stat.name,{stat}.stat.base_stat
        )
    })
    var answer = stats.map((info,index) => {
        return (
            {info}
        )
    })
    var check =  (this.props.effect.effect_entries[0] ? (
        <div> </div>
    ): (
        <div>{this.props.effect.effect_entries[0].effect} </div>
    ));
    console.log(check)
    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                {this.props.information.name[0].toUpperCase()}
              </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title={this.props.information.name.charAt(0).toUpperCase() + this.props.information.name.slice(1)}
            subheader={pokemon}
          />
          <CardMedia
            className={classes.media}
            image={this.props.information.sprites.front_default}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography component="p">
            <div>
            <strong> {this.props.effect.name.charAt(0).toUpperCase() + this.props.effect.name.slice(1)} </strong>
            </div>
                {this.props.effect.effect_entries[0].effect}
                {this.props.effect.effect_entries[0].short_effect}
               {console.log(this.props.effect.effect_entries)}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant="body2">
                Characteristics
              </Typography>

              <Typography paragraph>
                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
                chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
                salt and pepper, and cook, stirring often until thickened and fragrant, about 10
                minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}


const mapStateToProps = (state) => { 
    return { 
      information: state.search.pokemon,
      effect: state.power.ability
      };
  };

export default compose(
    withStyles(styles),
    connect(mapStateToProps,actions)
)
    (RecipeReviewCard);