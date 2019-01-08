import React from "react";
import PropTypes from 'prop-types';

import {Paper,Table,TableHead,TableRow,TableBody,TableCell,TablePagination} from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import GridHeader from './GridHeader';
import GridBody from './GridBody';
import GridToolBar from './GridToolBar';

import {findById} from '../../lib/gridUtils';

const tableStyles = theme => ({
  Responsive: {
    width: "100%",
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
      order: 'asc',
      orderBy: 'id',
      selected: [],
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

  handleCheckClick = (id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    //
    this.setState({ selected: newSelected });
  };

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }
    this.setState({ order, orderBy });
  };

  handleDelete = () => {
    const {tableData} = this.props;
    let newSelected = [];
    this.state.selected.map(i=>{
      var index = tableData.indexOf(tableData.find(findById,i))
      if (index > -1) {
        tableData.splice(index, 1);
      }
    })
    this.props.handleCellChange(tableData);
    this.setState({ selected: newSelected });
  }

  render(){
    const {tableHeader,tableData,handleCellChange} = this.props;
    const {rowsPerPage, page, order, orderBy,selected} = this.state;
    return(
      <>
        <Paper className={this.classes.Responsive}>
          <GridToolBar numSelected={selected.length} handleDelete={this.handleDelete} />
          <Table className={this.classes.table}>
            <GridHeader
              tableHeader={tableHeader}
              order={order}
              orderBy={orderBy}
              onRequestSort={this.handleRequestSort}
              rowCount={tableData.length}
            />
            <GridBody
              tableHeader={tableHeader}
              tableData={tableData}
              page={page}
              order={order}
              orderBy={orderBy}
              rowsPerPage={rowsPerPage}
              handleCellChange={handleCellChange}
              selected={selected}
              handleCheckClick={this.handleCheckClick}
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
  tableHeader: PropTypes.arrayOf(PropTypes.any),
  tableData: PropTypes.arrayOf(PropTypes.any),
  handleCellChange:PropTypes.any.isRequired,
}

export default withStyles(tableStyles)(Grid);
