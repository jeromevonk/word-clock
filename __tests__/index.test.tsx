import { render, screen } from '@testing-library/react'
import Home from 'src/pages/index'

describe('Index', () => {
  it('renders a table', () => {
    render(<Home />)

    const heading = screen.getByRole('table')

    expect(heading).toBeInTheDocument()
  })
})
