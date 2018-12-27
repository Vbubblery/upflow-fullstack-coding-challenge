import React from "react";
import PropTypes from 'prop-types';


import {Table,TableHead,TableRow,TableBody,TableCell} from '@material-ui/core';

class Grid extends React.Component{
  constructor(props){
    super(props);
    this.classes = props.classes;
    this.tableHeader = props.tableHeader;
    this.tableData = props.tableData;
  };

  componentDidMount () {}

  componentWillUnmount () {}

  render(){
    const TableHeader = this.tableHeader.map((prop,key)=>{
      return (
        <TableCell
          key={key}
        >
          {prop}
        </TableCell>
      )
    });

    const TableData = this.tableData.map((props,key)=>{
      return(
        <TableRow key={key}>
          {props.map((prop,key)=>{
            return(
              <TableCell
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
        <div>
          <Table>
            <TableHead>
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

export default Grid;
