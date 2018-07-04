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
import '../styles/card.css';
import { FacebookButton, FacebookCount, PinterestButton, RedditButton, GooglePlusButton } from "react-social";
import {facebook} from 'react-icons-kit/entypo/facebook';
import { Icon } from 'react-icons-kit';
import {pinterest} from 'react-icons-kit/entypo/pinterest';
import {tumblr} from 'react-icons-kit/entypo/tumblr';
import {googlePlus} from 'react-icons-kit/entypo/googlePlus';
import {redditAlien} from 'react-icons-kit/fa/redditAlien';
import { FacebookAPI, PinterestAPI, GooglePlusAPI} from '../config.js'



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
  constructor(props){
    super(props)
  }
  state = { 
      expanded: false
 };
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  render() {
    let url = "https://desolate-gorge-40418.herokuapp.com";
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                {this.props.Character}
              </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title={this.props.title}
            subheader={this.props.subHeader}
          />
          <CardMedia id="size"
            className={classes.media}
            image={this.props.cardMedia}
            title="Pokemon"
          />
          <CardContent>
            <Typography component="p">
            <div>
            <strong> {this.props.cardContent} </strong>
            </div>
            <div>
            {this.props.cardDescription1}
            </div>
            <div>
            {this.props.cardDescription2}
            </div>
            <div>
              {this.props.cardDescription3}
            </div>
            <div>
              {this.props.cardDescription4}
            </div>

            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Share">
              <FacebookButton id='cursor' url={url} appId={FacebookAPI}>
              <Icon  icon={facebook} />
              {/* <FacebookCount url={url} /> */}
              </FacebookButton>
             </IconButton>
             <IconButton aria-label="Share">
              <PinterestButton id='cursor' url={url} appId={PinterestAPI}>
              <Icon  icon={pinterest} />
              {/* <pinterestCount url={url} /> */}
              </PinterestButton>
             </IconButton>
             <IconButton aria-label="Share">
              <GooglePlusButton id='cursor' url={url} appId={GooglePlusAPI}>
              <Icon  icon={googlePlus} />
              {/* <FacebookCount url={url} /> */}
              </GooglePlusButton>
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
                <strong>Characteristics</strong>
              </Typography>

              <Typography paragraph>
               <div> {this.props.summary} </div>
               <div> {this.props.summary2} </div>
               <div> {this.props.summary3} </div>
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