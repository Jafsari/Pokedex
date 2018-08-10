import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';
import {withRouter} from "react-router-dom";
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { Icon } from 'react-icons-kit';
import {u1F352} from 'react-icons-kit/noto_emoji_regular/u1F352';
import {u1F452} from 'react-icons-kit/noto_emoji_regular/u1F452';
import {sphere} from 'react-icons-kit/icomoon/sphere';
import {globe} from 'react-icons-kit/entypo/globe';
import {u1F525} from 'react-icons-kit/noto_emoji_regular/u1F525';
import {androidStar} from 'react-icons-kit/ionicons/androidStar';
import {flash} from 'react-icons-kit/ionicons/flash';
import {ic_directions_bike} from 'react-icons-kit/md/ic_directions_bike';
import {ic_wb_cloudy} from 'react-icons-kit/md/ic_wb_cloudy';
import {fire} from 'react-icons-kit/icomoon/fire';
import {ic_landscape} from 'react-icons-kit/md/ic_landscape';
import {ic_donut_small} from 'react-icons-kit/md/ic_donut_small';
import '../styles/tileData.css';
import {twitch} from 'react-icons-kit/icomoon/twitch';
import {basic_cards_diamonds} from 'react-icons-kit/linea/basic_cards_diamonds';
import {search} from 'react-icons-kit/fa/search';


export const mailFolderListItems = (
  <div>
    <ListItem button component={Link} to="/berries"  >
      <ListItemIcon>
      <Icon icon={u1F352} />
      </ListItemIcon>
      <ListItemText primary="Berries"  />
    </ListItem>
    <ListItem button component={Link} to="/evolutions">
      <ListItemIcon>
      <Icon icon={androidStar} />
      </ListItemIcon>
      <ListItemText primary="Evolutions" />
    </ListItem>
    <ListItem button component={Link} to="/natures">
      <ListItemIcon>
      <Icon icon={fire} />
      </ListItemIcon>
      <ListItemText primary="Natures" />
    </ListItem>
    <ListItem button component={Link} to="/items">
      <ListItemIcon>
      <Icon className='rotate' icon={ic_donut_small} />
      </ListItemIcon>
      <ListItemText primary="Items" />
    </ListItem>
    <ListItem button component={Link} to="/cards">
      <ListItemIcon>
      <Icon icon={basic_cards_diamonds} />
      </ListItemIcon>
      <ListItemText primary="Cards" />
    </ListItem>
  </div>
);



export const otherMailFolderListItems = (
  <div>
    <ListItem button component={Link} to="/regions">
      <ListItemIcon>
      <Icon icon={ic_landscape} />
      </ListItemIcon>
      <ListItemText primary="Regions" />
    </ListItem>
    <ListItem button component={Link} to="/locations">
      <ListItemIcon>
      <Icon icon={globe} />
      </ListItemIcon>
      <ListItemText primary="Locations" />
    </ListItem>
    <ListItem button component={Link} to="/moves">
      <ListItemIcon>
      <Icon icon={flash} />
      </ListItemIcon>
      <ListItemText primary='Moves' />
    </ListItem>
    <ListItem button component={Link} to="/streams">
      <ListItemIcon>
      <Icon icon={twitch} />
      </ListItemIcon>
      <ListItemText primary='Twitch' />
    </ListItem>
    <ListItem button component={Link} to="/">
      <ListItemIcon>
      <Icon icon={search} />
      </ListItemIcon>
      <ListItemText primary="Pokemon" />
    </ListItem>
    
  </div>
);
