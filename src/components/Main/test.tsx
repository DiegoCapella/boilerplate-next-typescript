import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Main />)

    expect(screen.getByRole('heading', { name: /Main/i })).toBeInTheDocument()
  })
})
