import React from 'react'
import Barchart from '../BarChart/Barchart'
import '../Home/home.css'
import Welcome from '../Welcome/Welcome'
import Linechart from '../Linechart/Linechart'
import BarchartBig from '../BarchartBig/BarchartBig'
import Piechart from '../Piechart/Piechart'


export default function DBContent() {
  return (
    <>
    <div className='db-content-row-1'>
            <div className='content-large-data-box content-welcome'><Welcome /></div>
            <div className='content-medium-data-box content-bar-chart'><Barchart/></div>
          </div>
          <div className='db-content-row-2'>
            <div className='line-graph-1 graph-width'><Linechart /></div>
            <div className='line-graph-2 graph-width'><Linechart /></div>
            <div className='line-graph-3 graph-width'><Linechart /></div>
          </div>
          <div className='db-content-row-3'>
                <div className='content-large-data-box bar-chart-big'>
                  <BarchartBig />
                </div>
                <div className='content-medium-data-box'>
                  <Piechart />
                </div> 
          </div>
    </>
  )
}
