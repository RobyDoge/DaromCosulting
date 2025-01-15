import { render, screen } from '@testing-library/react'
import Contact from '@/app/contact/page'

describe('Contact Page', () => {
  it('renders contact information', () => {
    render(<Contact />)
    
    expect(screen.getByText(/contact@daromconsulting.com/i)).toBeInTheDocument()
    expect(screen.getByText(/program de lucru/i)).toBeInTheDocument()
  })

  it('displays business hours', () => {
    render(<Contact />)
    
    expect(screen.getByText(/luni - vineri/i)).toBeInTheDocument()
    expect(screen.getByText(/sâmbătă/i)).toBeInTheDocument()
    expect(screen.getByText(/duminică/i)).toBeInTheDocument()
  })
})

