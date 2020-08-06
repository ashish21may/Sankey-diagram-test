import React from 'react'
import Header from '../components/Header'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: key => key,
    i18n: { changeLanguage: jest.fn() }
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
    expect(getByTestId('centime-header')).toHaveClass('header-text')
    expect(getByTestId('centime-header')).toHaveTextContent('Centime')
    expect(getByRole('button')).toBeInTheDocument()
  })
})
