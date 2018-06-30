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

export const mailFolderListItems = (
  <div>
    <ListItem button component={Link} to="/berries"  >
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Berries"  />
    </ListItem>
    <ListItem button component={Link} to="/evolutions">
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
      <ListItemText primary="Evolutions" />
    </ListItem>
    <ListItem button component={Link} to="/encounters">
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>
      <ListItemText primary="Encounters" />
    </ListItem>
    <ListItem button component={Link} to="/items">
      <ListItemIcon>
        <DraftsIcon />
      </ListItemIcon>
      <ListItemText primary="Items" />
    </ListItem>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <ListItem button component={Link} to="/games">
      <ListItemIcon>
        <MailIcon />
      </ListItemIcon>
      <ListItemText primary="Games" />
    </ListItem>
    <ListItem button component={Link} to="/locations">
      <ListItemIcon>
        <DeleteIcon />
      </ListItemIcon>
      <ListItemText primary="Locations" />
    </ListItem>
    <ListItem button component={Link} to="/natures">
      <ListItemIcon>
        <ReportIcon />
      </ListItemIcon>
      <ListItemText primary="Natures" />
    </ListItem>
  </div>
);