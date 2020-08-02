import React from 'react'
import Highcharts from 'highcharts'
import HighchartSankey from 'highcharts/modules/sankey'
import HighchartsReact from 'highcharts-react-official'
import '../styles/Diagram.css';
import { useSelector } from 'react-redux';

HighchartSankey(Highcharts)

const SankeyDiagram = () => {
  const data = useSelector(state => state.diagramReducer)

  return (
    <div className='diagram'>
    <HighchartsReact
      highcharts={Highcharts}
      text='My Sankey chart'
      options={{
        title: {
          text: 'Sankey Diagram representation with Inflow(Income Source) and Outflow(expenditure)'
        },
        series: [
          {
            type: 'sankey',
            data: data
          }
        ]
      }}
    />
    </div>
  )
}

export default SankeyDiagram;
