import React from "react";
import PropTypes from 'prop-types';

import {TableRow,TableBody,TableCell,TextField,Typography} from '@material-ui/core';

import {stableSort,getSorting} from '../../lib/gridUtils';

import {findById} from '../../lib/gridUtils';

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
    this.props.tableData.find(findById,id)[i] = event.target.value;
    this.props.handleCellChange(this.props.tableData);
  };

  onActive=(event)=>{
    if(event.key=='Escape'){
      this.setState({ editIdx:{id:-1,col:undefined,}, });
    }
  }
  render(){
    const {tableData,tableHeader,rowsPerPage,page,order,orderBy} = this.props;
    const {editIdx} = this.state;
    //const emptyRows = rowsPerPage - Math.min(rowsPerPage, tableData.length - page * rowsPerPage);
    return(
      <TableBody >
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
                          autoFocus={true}
                          helperText="press esc for exit"
                          onKeyDown={this.onActive}
                          defaultValue={undefined}
                          disabled={i=='id'?true:false}
                          onChange={this.handleChange(row.id,i)}
                        />
                      ):(<Typography variant="body2">{row[i]}</Typography>)}
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
