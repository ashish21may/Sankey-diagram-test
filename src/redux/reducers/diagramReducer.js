import { ADD_TO_DIAGRAM, REMOVE_FROM_DIAGRAM, EDIT_IN_DIAGRAM } from '../constant';
import { data } from '../../mock-data/Data';

const initialState = data;

export default function diagramReducer (state = initialState, action) {
  const diagramData = state.sankeyData;
  switch (action.type) {
    case ADD_TO_DIAGRAM:
      const newData = action.payload;
      const dataExists = diagramData.some((item) => item.id === newData.id);
      return dataExists
        ? Object.assign({}, state, {sankeyData: diagramData.map(item=>{
            if(item.id === newData.id){
              item.from = newData.from;
              item.to = newData.to;
              item.weight = newData.weight;
            }
            return item
          })})
        : Object.assign({}, state, {sankeyData:[...diagramData, newData]});

    case REMOVE_FROM_DIAGRAM:
      const dataId = action.payload
      return Object.assign({}, state, {sankeyData: diagramData.filter(item=> item.id !== dataId)});

    case EDIT_IN_DIAGRAM:
      const editId = action.payload
      return Object.assign({}, state, {editSankeyData: diagramData.filter(item=> item.id === editId)});
    default:
      return state
  }
}
