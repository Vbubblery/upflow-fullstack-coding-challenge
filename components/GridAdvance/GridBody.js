import React from "react";
import PropTypes from 'prop-types';

import {TableRow,TableBody,TableCell,TextField} from '@material-ui/core';

import {stableSort,getSorting} from '../../lib/gridUtils';

class GridBody extends React.Component{
  constructor(props){
    super(props);
    this.classes = props.classes;
    this.state = {
      editIdx:{
        id:-1,
        col:undefined,
      },
    }
  };

  componentDidMount () {}

  componentWillUnmount () {}

  startEditing = i => event => {
    this.setState({ editIdx: i });
  };

  handleChange = (id,i)=> event =>{
    // this.setState({
    //   [id]: event.target.value,
    // });
    console.log(event.target.value)
  };

  render(){
    const {tableData,tableHeader,rowsPerPage,page,order,orderBy} = this.props;
    const {editIdx} = this.state;
    //const emptyRows = rowsPerPage - Math.min(rowsPerPage, tableData.length - page * rowsPerPage);
    return(
      <TableBody>
        {stableSort(tableData, getSorting(order, orderBy))
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row,key)=>{
            return(
              <TableRow hover key={key} >
                {tableHeader.map((i,key)=>{
                  return(
                    <TableCell align="left" key={key} onClick={this.startEditing({id:row.id,col:i})} >
                      {((editIdx.id == row.id) && (editIdx.col == i))?(
                        <TextField
                          value={row[i]}
                          onChange={this.handleChange(row.id,i)}
                        />
                      ):(row[i])}
                    </TableCell>)
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
