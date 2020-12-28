import React from 'react'
import { Drawer, List, Divider, ListItem, ListItemText, ListSubheader, ListItemIcon } from '@material-ui/core'
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
  root: { display: 'flex' },
  toolbar: theme.mixins.toolbar
}))

const Sidebar = ({ width, onSelect }) => {
  const classes = useStyles()
  return (
    <Drawer style={{ width }} variant="permanent">
      <div className={classes.toolbar} />
      <Divider />
      <List subheader={<ListSubheader component="div" id="nested-list-subheader">Eventi</ListSubheader>}>
        {['Evento 1', 'Evento 2', 'Evento 3', 'Evento 4'].map((item, index) => (
          <ListItem button className={classes.listItem} key={index} onClick={() => onSelect(index)}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
        <ListItem button onClick={() => onSelect(null)}>
          <ListItemIcon><AddCircleOutlinedIcon /></ListItemIcon>
          <ListItemText primary="Aggiungi Evento" />
        </ListItem>
      </List>
    </Drawer>
  )
}

Sidebar.propTypes = {
  width: PropTypes.number,
  onSelect: PropTypes.func
}

export default Sidebar
