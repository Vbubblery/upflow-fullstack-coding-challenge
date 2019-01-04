import React from "react";
import PropTypes from 'prop-types';

import {Paper,Table,TableHead,TableRow,TableBody,TableCell,TablePagination} from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import GridHeader from './GridHeader';
import GridBody from './GridBody';

const tableStyles = theme => ({
  Responsive: {
    width: "50%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
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
})


class Grid extends React.Component{
  constructor(props){
    super(props);
    this.classes = props.classes;
    this.state = {
      page:0,
      rowsPerPage:10,
    }
  };

  componentDidMount () {}

  componentWillUnmount () {}

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  render(){
    const {tableHeader,tableData} = this.props;
    const {rowsPerPage, page} = this.state;

    return(
      <>
        <Paper className={this.classes.Responsive}>
          <Table className={this.classes.table}>
            <GridHeader tableHeader={tableHeader} />
            <GridBody
              tableHeader={tableHeader}
              tableData={tableData}
              page={page}
              rowsPerPage={rowsPerPage}
            />
          </Table>
          <TablePagination
            rowsPerPageOptions={[10,20,30]}
            component="div"
            count={tableData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            backIconButtonProps={{
              'aria-label': 'Previous Page',
            }}
            nextIconButtonProps={{
              'aria-label': 'Next Page',
            }}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
          />
        </Paper>
      </>
    )
  }
}

Grid.propTypes = {
  tableHeader: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.any)
}

export default withStyles(tableStyles)(Grid);
