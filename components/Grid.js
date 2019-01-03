import React from "react";
import PropTypes from 'prop-types';

import {Table,TableHead,TableRow,TableBody,TableCell} from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import GridHeader from './GridAdvance/GridHeader';
import GridBody from './GridAdvance/GridBody';

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
    const {tableHeader,tableData} = this.props;
    return(
      <>
        <div className={this.classes.Responsive}>
          <Table className={this.classes.table}>
            <GridHeader tableHeader={tableHeader} />
            <GridBody tableHeader={tableHeader} tableData={tableData} />
          </Table>
        </div>
      </>
    )
  }
}

Grid.propTypes = {
  tableHeader: PropTypes.arrayOf(PropTypes.string),

}

export default withStyles(tableStyles)(Grid);
