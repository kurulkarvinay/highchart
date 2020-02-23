import React from 'react';
import Highchart from './charts/Hightchart'
import List from './grid/Grid'

const charts = () => {
  return (
    <div className='mainContainer'>
      <Highchart title={'Labour Cost per Carton'} />
      <Highchart title={'DC Cost per Carton'} />
      <List />
    </div>
      
  )
}

export default charts;
