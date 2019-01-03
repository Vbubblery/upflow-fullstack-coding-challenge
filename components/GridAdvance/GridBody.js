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
    const {tableData,tableHeader} = this.props;
    return(
      <TableBody>
        {tableData
          .map((row,key)=>{
            return(
              <TableRow hover key={key}>
                {tableHeader.map((i,key)=>{
                  return(<TableCell align="left" key={key}>{row[i]}</TableCell>)
                })}
              </TableRow>
            )
          })}
      </TableBody>
    )
  }

}
export default GridBody;
