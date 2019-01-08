import React from "react";

// components
import Grid from './GridAdvance/Grid';
import CSVReader from "react-csv-reader";
import {Button} from '@material-ui/core';

// redux connect
import {connect} from 'react-redux';
import {resetGrid, updateGrid} from '../store'

class TableList extends React.Component{
  constructor(props){
    super(props);
    this.classes = props.classes;
  };

  componentDidMount () {}

  componentWillUnmount () {}

  handleCSV= csv => {
    const {dispatch} = this.props;
    csv.map((row,key)=>{row.id=key});
    const header = Object.keys(csv[0]);
    dispatch(updateGrid({data:{header:header,body:csv}}));
  }

  reset = (e) => {
    const {dispatch} = this.props;
    dispatch(resetGrid());
  }

  handleCellChange = props =>{
    const {dispatch} = this.props;
    dispatch(updateGrid({data:{header:this.props.gridPage.data.header,body:props}}));
  }

  render(){
    return(
      <>
        <CSVReader
          onFileLoaded={this.handleCSV}
          inputStyle={{display: 'none'}}
          inputId="csv-reader"
          parserOptions={{
            header:true,
            //dynamicTyping:true, //this is for auto-transform if the value is a number
            comments:"#",
            fastMode:true
          }}
        />
        <label htmlFor="csv-reader">
          <Button variant="contained" component="span">
            Upload CSV
          </Button>
        </label>
        <Button variant="contained" component="span" onClick={this.reset} >
          Reset
        </Button>
        <Grid
          tableHeader={this.props.gridPage.data.header}
          tableData={this.props.gridPage.data.body}
          handleCellChange={this.handleCellChange}
        />
      </>
    )
  }
}

function mapStateToProps (state) {
  const {gridPage} = state;
  return gridPage
}

export default connect(mapStateToProps)(TableList);
