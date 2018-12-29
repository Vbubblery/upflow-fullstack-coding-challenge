import React from "react";

// components
import Grid from './Grid';
import CSVReader from "react-csv-reader";
import {Button} from '@material-ui/core';

// redux connect
import {connect} from 'react-redux';
import {initGrid, resetGrid } from '../store'

class TableList extends React.Component{
  constructor(props){
    super(props);
    this.classes = props.classes;
  };

  componentDidMount () {}

  componentWillUnmount () {}

  handleForce = csv => {
    const {dispatch} = this.props;
    const header = csv.shift();
    dispatch(initGrid({data:{header:header,body:csv}}))
  }

  reset = (e) => {
    const {dispatch} = this.props;
    dispatch(resetGrid());
  }

  render(){
    return(
      <>
        <CSVReader
          onFileLoaded={this.handleForce}
          inputStyle={{display: 'none'}}
          inputId="csv-reader"
        />
        <label htmlFor="csv-reader">
          <Button variant="contained" component="span">
            Upload CSV
          </Button>
        </label>
        <Button variant="contained" component="span" onClick={this.reset} >
          Reset
        </Button>
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
