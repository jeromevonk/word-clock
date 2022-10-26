import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

describe('Index', () => {
  it('renders a footer', () => {
    render(<Home />)

    const footer = screen.getByRole('link', {
      name: "By Jerome Vonk",
    })

    expect(footer).toBeInTheDocument()
  })
})
