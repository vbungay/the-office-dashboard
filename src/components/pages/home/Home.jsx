import React from 'react'
import './Home.scss'
import Featured from '../../featured/Featured'
import Charts from '../../charts/Charts'

const Home = () => {
  return (
    <div className="home">
        <Featured />
        <Charts />
    </div>
  )
}

export default Home