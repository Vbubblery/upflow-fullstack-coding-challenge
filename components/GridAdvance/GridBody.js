import React from "react";
import PropTypes from 'prop-types';

import {TableRow,TableBody,TableCell} from '@material-ui/core';


class GridBody extends React.Component{
  constructor(props){
    super(props);
    this.classes = props.classes;
  };

  componentDidMount () {}

  componentWillUnmount () {}


  render(){
    const {tableData,tableHeader,rowsPerPage,page} = this.props;
    //const emptyRows = rowsPerPage - Math.min(rowsPerPage, tableData.length - page * rowsPerPage);
    return(
      <TableBody>
        {tableData
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row,key)=>{
            return(
              <TableRow hover key={key}>
                {tableHeader.map((i,key)=>{
                  return(<TableCell align="left" key={key}>{row[i]}</TableCell>)
                })}
              </TableRow>
            )
          })}
          {/**emptyRows > 0 && (
            <TableRow style={{ height: 49 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )**/}
      </TableBody>
    )
  }
}

GridBody.propTypes = {
  tableHeader: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.any),
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
}

export default GridBody;
