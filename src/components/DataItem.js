import React from 'react'
import { useDispatch } from 'react-redux'
import { REMOVE_FROM_DIAGRAM, EDIT_IN_DIAGRAM } from '../redux/constant'

import '../styles/DataItem.css'


const DataItem = ({ data }) => {
  const dispatch = useDispatch()

  const handleDelete = id => {
    dispatch({ type: REMOVE_FROM_DIAGRAM, payload: id })
  }

  const handleEdit = id => {
    dispatch({ type: EDIT_IN_DIAGRAM, payload: id })
  }

  return (
    <div className='data-item'>
      <div className='data-item-content' data-testid='data-item-in-list'>
        {data.from} {' --> '} {data.to} : {data.weight}
      </div>
      <div className='data-item-update'>
      <div className='data-item-edit' data-testid='item-edit' onClick={() => handleEdit(data.id)}>
        Edit
      </div>
      <div className='data-item-delete' data-testid='item-delete' onClick={() => handleDelete(data.id)}>
        X
      </div>
      </div>
    </div>
  )
}

export default DataItem
