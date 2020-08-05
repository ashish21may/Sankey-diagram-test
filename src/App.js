import React from 'react'
import SankeyDiagram from './components/SankeyDiagram'
import Form from './components/Form'
import DataList from './components/DataList'
import Header from './components/Header'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n/i18n'
import './App.css'

function App () {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <div className='App'>
          <Header />
          <div className='data-container'>
            <Form />
            <DataList />
          </div>
          <SankeyDiagram />
        </div>
      </I18nextProvider>
    </Provider>
  )
}

export default App
