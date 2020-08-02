import React from 'react'
import { useDispatch } from 'react-redux'
import { REMOVE_FROM_DIAGRAM } from '../redux/constant'

import '../styles/DataItem.css'


const RepoItem = ({ data }) => {
  const dispatch = useDispatch()

  const handleDelete = id => {
    console.log('id: ',id)
    dispatch({ type: REMOVE_FROM_DIAGRAM, payload: id })
  }

  return (
    <div className='data-item'>
      <div className='data-item-content'>
        {data.from} {' --> '} {data.to} : {data.weight}
      </div>
      <div className='data-item-delete' onClick={() => handleDelete(data.id)}>
        X
      </div>
    </div>
  )
}

export default RepoItem
