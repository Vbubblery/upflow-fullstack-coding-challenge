import React from "react";
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { lighten } from '@material-ui/core/styles/colorManipulator';

import {Toolbar,Typography,Tooltip,IconButton,Divider} from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';


const toolbarStyles = theme => ({
  root: {
    paddingRight: theme.spacing.unit,
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  actions: {
    color: theme.palette.text.secondary,
  },
  title: {
    flex: '0 0 auto',
  },
});

class GridToolBar extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount () {}

  componentWillUnmount () {}

  onClickButton = event =>{
    this.props.handleDelete();
  }

  render(){
    const {numSelected,classes} = this.props;
    return(
      <Toolbar
        className={classNames(classes.root,{[classes.highlight]:numSelected>0})}
      >
        <div className={classes.title}>
          {numSelected > 0 ? (
            <Typography color="inherit" variant="subtitle1">
              {numSelected} selected
            </Typography>
          ) : (
            <Typography variant="h6" id="tableTitle">
              Grid-Table
            </Typography>
          )}
        </div>
        <Divider light />
        <div className={classes.actions}>
          {numSelected > 0 ? (
            <Tooltip title="Delete">
              <IconButton aria-label="Delete" onClick={this.onClickButton}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          ) : false}
        </div>
      </Toolbar>
    )
  }
}
GridToolBar.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
};

export default withStyles(toolbarStyles)(GridToolBar);
