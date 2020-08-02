import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ADD_TO_DIAGRAM } from '../redux/constant'
import { v4 as uuid } from 'uuid'

import '../styles/Form.css'

const Form = () => {
  const [inflow, setInflow] = useState('')
  const [outflow, setOutflow] = useState('')
  const [weight, setWeight] = useState('')
  const dispatch = useDispatch()

  const handleFormSubmit = e => {
    e.preventDefault()
    const data = {
      from: inflow,
      to: outflow,
      weight: Number(weight),
      id: uuid()
    }
    console.log('new form Data Object: ', data)

    dispatch({ type: ADD_TO_DIAGRAM, payload: data })
  }

  return (
    <form className='form' onSubmit={handleFormSubmit}>
      <h2> Enter Data for Sankey diagram</h2>
      <input
        type='text'
        value={inflow}
        onChange={e => setInflow(e.target.value)}
        placeholder='Enter Income source ...'
      />
      <input
        type='text'
        value={outflow}
        onChange={e => setOutflow(e.target.value)}
        placeholder='Enter Expenditure ...'
      />
      <input
        type='text'
        value={weight}
        onChange={e => setWeight(e.target.value)}
        placeholder='Enter Weightage in numbers ...'
      />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Form
