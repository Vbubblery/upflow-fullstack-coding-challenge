import React from "react";

// components
import Grid from './Grid';
import CSVReader from "react-csv-reader";

// redux connect
import {connect} from 'react-redux';
import { initGrid } from '../store'

class TableList extends React.Component{
  constructor(props){
    super(props);
    this.classes = props.classes;
  };

  componentDidMount () {}

  componentWillUnmount () {}

  handleForce = csv => {
    const {dispatch} = this.props
    const header = csv.shift();
    dispatch(initGrid({data:{header:header,body:csv}}))
  }

  render(){
    return(
      <>
      <CSVReader
        onFileLoaded={this.handleForce}
      />
      <Grid tableHeader={this.props.gridPage.data.header} tableData={this.props.gridPage.data.body} />
      </>
    )
  }
}

function mapStateToProps (state) {
  const {gridPage} = state;
  return gridPage
}

export default connect(mapStateToProps)(TableList);
