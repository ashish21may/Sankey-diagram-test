import React from 'react'
import SankeyDiagram from './components/SankeyDiagram'
import Form from './components/Form'
import DataList from './components/DataList'
import Header from './components/Header'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import './App.css'

function App () {
  return (
    <Provider store={store}>
      <div className='App'>
        <Header />
        <div className='data-container'>
          <Form />
          <DataList />
        </div>
        <SankeyDiagram />
      </div>
    </Provider>
  )
}

export default App
