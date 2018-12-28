import React from 'react'
import Link from 'next/link'

// Layout
import Layout from '../components/Layout';

// components
import Grid from '../components/Grid';
import CSVReader from "react-csv-reader";

import {connect} from 'react-redux';

const handleForce = data => console.log(data);

const Index = (props) => (
  <Layout>
    <CSVReader
      onFileLoaded={handleForce}
    />
    <Grid tableHeader={props.gridPage.data.header} tableData={props.gridPage.data.body} />
  </Layout>
)

function mapStateToProps (state) {

  const {gridPage} = state;
  return gridPage
}


export default connect(mapStateToProps)(Index)
