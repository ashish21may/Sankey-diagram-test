import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'

afterEach(cleanup)

// const initialState = {
//   sankeyData:[
//     {
//       from:'Salary',
//       to: 'Rent',
//       weight: 8,
//       id: 1
//     }
//   ],
//   editSankeyData:[]
// }

// const newData = {
//   from:'Salary',
//   to: 'Food',
//   weight: 10,
//   id: 2
// }

// function reducer(state=initialState, action){
//   switch(action.type) {
//     case 'ADD_TO_DIAGRAM':
//       return Object.assign({}, state, {sankeyData: [...state.sankeyData, newData]})
//     default:
//       return state;
//   }
// }

// function mockWithRedux (
//   component,
//   { initialState, store = createStore(reducer, initialState) } = {}
// ) {
//   return {
//   ...render(<Provider store={store}>{component}</Provider>)
//   }
// }

describe('App',()=>{
  const { queryByTestId, getAllByTestId } = render(<App />);

  const income = queryByTestId('input-income');
  const expenditure = queryByTestId('input-expenditure');
  const weight = queryByTestId('input-weight');
  const submit = queryByTestId('form-button');
  const listItems = getAllByTestId('data-item-in-list');

  describe('Sankey data Form', ()=>{
    it('displays on first render', async ()=>{

      expect(income).toBeInTheDocument();
      expect(expenditure).toBeInTheDocument();
      expect(weight).toBeInTheDocument();
      expect(submit).toBeInTheDocument();
      expect(submit).toHaveTextContent('Submit')

      expect(income).toHaveValue('');
      expect(weight).toHaveValue('');
      fireEvent.change(income,{target:{ value: 'Salary'}})
      fireEvent.change(expenditure,{target:{ value: 'Rent'}})
      fireEvent.change(weight,{target:{ value: '9'}})
      expect(income).toHaveValue('Salary');
      expect(expenditure).toHaveValue('Rent');
      expect(weight).toHaveValue('9');

      expect(listItems.length).toBe(11);
      // Below event will add one more element to Data-list
      fireEvent.click(submit)
    })
  })

  describe('Data List should show 12 items after first addition via Sankey Data form', ()=>{

    it('rendering of data-list', ()=>{
      const { getAllByTestId } = render(<App />);
      const listItems = getAllByTestId('data-item-in-list');
      const editButton = getAllByTestId('item-edit');

      const deleteButton = getAllByTestId('item-delete');
      // We fired Submit event above therefore total item in list will increase from 11 --> 12
      expect(listItems.length).toBe(12);
      expect(editButton.length).toBe(12);
      expect(deleteButton.length).toBe(12);
      fireEvent.click(deleteButton[0])
     
    })

    it('Updated Data List should only show 11 items after first deletion',()=>{
      const { getAllByTestId } = render(<App />);
      const listItems = getAllByTestId('data-item-in-list');
      const deleteButton = getAllByTestId('item-delete');

      expect(listItems.length).toBe(11);
      fireEvent.click(deleteButton[10])
    })

    it('Data list elements should render only 10 elements after second deletion', ()=>{
      const { getAllByTestId } = render(<App />);
      const listItems = getAllByTestId('data-item-in-list');

      expect(listItems.length).toBe(10);
    })
  })
})