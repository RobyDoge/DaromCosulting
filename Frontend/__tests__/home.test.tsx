import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home Page', () => {
  it('renders the welcome message', () => {
    render(<Home />)
    
    expect(screen.getByText('Bun venit la Darom Consulting')).toBeInTheDocument()
  })

  it('displays all service sections', () => {
    render(<Home />)
    
    expect(screen.getByText('Consultanță')).toBeInTheDocument()
    expect(screen.getByText('Soluții')).toBeInTheDocument()
    expect(screen.getByText('Suport')).toBeInTheDocument()
  })

  it('has a working appointment link', () => {
    render(<Home />)
    
    const link = screen.getByText('Programează o Consultație')
    expect(link).toBeInTheDocument()
    expect(link.closest('a')).toHaveAttribute('href', '/programare')
  })
})

