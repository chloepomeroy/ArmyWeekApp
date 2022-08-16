import React from 'react';
import Layout from "../components/layout"

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { ListItemButton } from '@mui/material';

//import the events JSON
var events = require('./events.json');

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const MyEvents = () => {
  var specificEvent = events.filter(event => event.number === 1)

  return(
    <Layout>
    <div>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item xs={12}>
                <Item>
                    <h2>My Events</h2>
                </Item>
            </Grid>
            <Grid item xs={10}>
            <List dense={true}>
            {/* This function maps all elements of the array into List Items */}
            {events.map(event => {
          return (
            <ListItem>
            <ListItemButton href={`/selectedEvent/${event.number}`}>
            <Grid item xs={10}>
              <ListItemText>{event.name}</ListItemText>
              </Grid>
              <Grid item xs={10}>
              <ListItemText secondary={event.date} />
              </Grid>
            </ListItemButton>
            </ListItem>
          );
            })}
            </List>
            </Grid>
      </Grid>
    </div>
    </Layout>
  )
}

export default MyEvents