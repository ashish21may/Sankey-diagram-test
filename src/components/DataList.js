import React from 'react'
import DataItem from './DataItem';
import { useSelector } from 'react-redux';

import '../styles/DataItem.css';

const DataList = () => {
  const dataList = useSelector(state => state.diagramReducer);
  return (
    <div className="data-list">
      <h2> Data-List {dataList.length ? '(Items can be deleted)': '(all items deleted)'}</h2>
      {dataList.map((data, index) => (
        <DataItem data={data} key={index} />
      ))}
    </div>
  )
}

export default DataList
