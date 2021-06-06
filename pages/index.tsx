import { Box} from '@material-ui/core';
import React from 'react';
import Head from "next/head"
import Countries from './component/countries';

export default function Home() {  
  return (
    <React.Fragment>
        <Box component="span" m={1}>
        <Head>
          <title>RESTCountries</title>
          <link rel="preconnect" href="https://fonts.gstatic.com" /> 
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap" rel="stylesheet" />     
        </Head>
        <h1 style={{fontFamily:"'Roboto', sans-serif;",color:"rgb(233, 195, 195)"}}>REST Countries</h1>
      </Box>
      <Countries />
    </React.Fragment>
  )
}
