import React from 'react'
import Header from '../components/Header'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: key => key,
    i18n: { changeLanguage: jest.fn()}
  })
}));

const onClick = jest.fn();

describe('Header', () => {
  it('Header snapshot', () => {
    // Fragment is html returned by Header component.
    const { asFragment } = render(<Header />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders correctly', () => {
    const { getByTestId, getByRole } = render(<Header />)
    const button = getByTestId('language-button');
    const headerText = getByTestId('centime-header');
    expect(headerText).toHaveClass('header-text')
    expect(headerText).toHaveTextContent('Centime')
    expect(button).toBeInTheDocument();
    // default value of language is en so click will change it to 'hin'
    fireEvent.click(button, {target : { value: 'hin'}})
    expect(button).toHaveValue('hin')
    fireEvent.click(button, {target : { value: 'en'}})
    expect(button).toHaveValue('en')

  })
})
