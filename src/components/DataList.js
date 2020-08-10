import React from 'react'
import DataItem from './DataItem';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import '../styles/DataItem.css';

const DataList = () => {
  const dataList = useSelector(state => state.diagramReducer.sankeyData);
  const { t } = useTranslation();
  return (
    <div className="data-list">
      <h2 data-testid='datalist-heading'> {t('Data-List')} {dataList.length ? t('(Items can be deleted)'): t('(all items deleted)')}</h2>
      {dataList.map((data) => (
        <DataItem data={data} key={data.id} />
      ))}
    </div>
  )
}

export default DataList
