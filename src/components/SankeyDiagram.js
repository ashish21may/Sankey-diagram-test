import React from 'react'
import Highcharts from 'highcharts'
import HighchartSankey from 'highcharts/modules/sankey'
import HighchartsReact from 'highcharts-react-official'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import '../styles/Diagram.css'

HighchartSankey(Highcharts)

const SankeyDiagram = () => {
  const data = useSelector(state => state.diagramReducer.sankeyData)
  // Below console tells us that we get updated data from store always.
  // But It seems highchart Sankey diagram does not updates sometimes, even with new data.
  console.log('data in Sankey Diagram: ',data)
  const { t } = useTranslation()
  const titleText = t(
    'Sankey Diagram representation with Inflow(Income Source) and Outflow(expenditure)'
  )
  return (
    <div className='diagram'>
      <HighchartsReact
        highcharts={Highcharts}
        text='My Sankey chart'
        options={{
          title: {
            text: titleText
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

export default SankeyDiagram
