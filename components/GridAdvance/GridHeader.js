import React from "react";
import PropTypes from 'prop-types';

import {TableHead,TableRow,TableCell} from '@material-ui/core';


class GridHeader extends React.Component{
  constructor(props){
    super(props);
    this.classes = props.classes;
  };

  componentDidMount () {}

  componentWillUnmount () {}



  render(){
    const {tableHeader} = this.props;
    return(
      <TableHead>
        <TableRow>
          {tableHeader.map(item=>{
            return(
              <TableCell key={item}>
                {item}
              </TableCell>
            )
          },this)}
        </TableRow>
      </TableHead>
    )
  }

}
export default GridHeader;
