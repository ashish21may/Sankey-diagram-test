import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_TO_DIAGRAM } from '../redux/constant'
import { v4 as uuid } from 'uuid'
import { useTranslation } from 'react-i18next'

import '../styles/Form.css'

const Form = () => {
  const [inflow, setInflow] = useState('')
  const [outflow, setOutflow] = useState('')
  const [weight, setWeight] = useState('')
  const [validationMessage, setValidationMessage] = useState('');
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const editSankeyData = useSelector(state => state.diagramReducer.editSankeyData)

  useEffect(() => {
    
    if (editSankeyData.length>0) {
      setInflow(editSankeyData[0].from)
      setOutflow(editSankeyData[0].to)
      setWeight(editSankeyData[0].weight)
      setValidationMessage('')
    }
  }, [editSankeyData])

  const handleFormSubmit = e => {
    e.preventDefault()
    if(isValid()){
      const data =
      editSankeyData.length > 0
          ? {
              from: inflow,
              to: outflow,
              weight: Number(weight),
              id: editSankeyData[0].id
            }
          : {
              from: inflow,
              to: outflow,
              weight: Number(weight),
              id: uuid()
            }
  
      dispatch({ type: ADD_TO_DIAGRAM, payload: data })
      clearState()
    }
  }

  const isValid = () => {
    if (inflow.trim() === '') {
      setValidationMessage('Income is not entered')
      return false
    } else if (outflow.trim() === '') {
      setValidationMessage('Expenditure is not entered')
      return false
    } else if (String(weight).trim() === '') {
      setValidationMessage('Weight is not entered')
      return false
    } else if (isNaN(Number(weight))){
      setValidationMessage('Weight is not a number')
      return false
    }
    setValidationMessage('')
    return true;
  }

  const clearState = () => {
    setInflow('')
    setOutflow('')
    setWeight('')
  }

  return (
    <form className='form' onSubmit={handleFormSubmit}>
      <h2> {t('Form Heading')}</h2>
      <div className="form-error-message">{validationMessage}</div>
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
