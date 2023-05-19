import React from 'react'
import './Home.scss'
import Featured from '../../featured/Featured'
import Charts from '../../charts/Charts'
import WidgetSm from '../../widgets/WidgetSm'
import WidgetLarge from '../../widgetlarge/WidgetLarge'

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <Charts />
      <div className="widgets">
        <WidgetSm />
        <WidgetLarge />
      </div>
    </div>
  )
}

export default Home