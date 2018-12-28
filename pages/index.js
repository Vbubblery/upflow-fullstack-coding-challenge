import React from 'react'
import Link from 'next/link'

// Layout
import Layout from '../components/Layout';

// components
import Grid from '../components/Grid';
import CSVReader from "react-csv-reader";

const tableHeader = ["sepal_length", "sepal_width", "petal_length", "petal_width","species"];

const tableData = [["5.1","3.5","1.4","0.2","Iris-setosa"],
                   ["4.9","3","1.4","0.2","Iris-setosa"],
                   ["4.7","3.2","1.3","0.2","Iris-setosa"],
                   ["4.6","3.1","1.5","0.2","Iris-setosa"],
                   ["5.1","3.5","1.4","0.2","Iris-setosa"],
                   ["4.9","3","1.4","0.2","Iris-setosa"],
                   ["4.7","3.2","1.3","0.2","Iris-setosa"],
                   ["4.6","3.1","1.5","0.2","Iris-setosa"],
                   ["5.1","3.5","1.4","0.2","Iris-setosa"],
                   ["4.9","3","1.4","0.2","Iris-setosa"],
                   ["4.7","3.2","1.3","0.2","Iris-setosa"],
                   ["4.6","3.1","1.5","0.2","Iris-setosa"],]

const handleForce = data => console.log(data);

const Index = () => (
  <Layout>
    <CSVReader
      onFileLoaded={handleForce}
    />
    <Grid tableHeader={tableHeader} tableData={tableData} />
  </Layout>
)

export default Index
