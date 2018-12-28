import React from "react";
import PropTypes from 'prop-types';

import {Table,TableHead,TableRow,TableBody,TableCell} from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const tableStyles = theme => ({
  Responsive: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    marginBottom: "0",
    width: "100%",
    maxWidth: "100%",
    backgroundColor: "transparent",
    borderSpacing: "0",
    borderCollapse: "collapse"
  },
  tableCell: {
    lineHeight: "1.42857143",
    padding: "12px 8px",
    verticalAlign: "middle"
  },
  tableHeadCell: {
    color: "inherit",
    fontSize: "1em"
  },
  tableHeadBackGroundColor:{
    backgroundColor: "#2196f3"
  },
})


class Grid extends React.Component{
  constructor(props){
    super(props);
    this.classes = props.classes;
  };

  componentDidMount () {}

  componentWillUnmount () {}

  render(){
    const TableHeader = this.props.tableHeader.map((prop,key)=>{
      return (
        <TableCell
          className={classNames(this.classes.tableCell, this.classes.tableHeadCell)}
          key={key}
        >
          {prop}
        </TableCell>
      )
    });

    const TableData = this.props.tableData.map((props,key)=>{
      return(
        <TableRow key={key}>
          {props.map((prop,key)=>{
            return(
              <TableCell
                className={this.classes.tableCell}
                key={key}
              >
                {prop}
              </TableCell>
            )
          })}
        </TableRow>
      )
    });

    return(
      <>
        <div className={this.classes.Responsive}>
          <Table className={this.classes.table}>
            <TableHead className={this.classes.tableHeadBackGroundColor}>
              <TableRow>
                {TableHeader}
              </TableRow>
            </TableHead>
            <TableBody>
              {TableData}
            </TableBody>
          </Table>
        </div>
      </>
    )
  }
}

Grid.propTypes = {
  tableHeader: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
}

export default withStyles(tableStyles)(Grid);
