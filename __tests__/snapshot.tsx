import { act, render } from '@testing-library/react'
import Home from '../pages/index'

it('renders homepage unchanged', () => {
  
  act(() => {
    const { container } = render(<Home />)
    expect(container).toMatchSnapshot()
  });
  
})
