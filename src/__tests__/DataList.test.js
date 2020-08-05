import React from 'react';
import { render, getByTestId } from '@testing-library/react';
import {useSelector} from 'react-redux'
 
import DataList from '../components/DataList';

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn()
}));

const dataList = [{
  from: 'Salary',
  to: 'shopping',
  weight: 12,
  id: 1
}]
 
describe('App', () => {
  beforeEach(() => {
    useSelector.mockImplementation(callback => {
      return callback(dataList);
    });
  });
  afterEach(() => {
    useSelector.mockClear();
  });
  test('renders App component', () => {
    const {getByTestId} = render(<DataList />);
    expect(getByTestId('datalist-heading').toBeInTheDocument());
  });
});