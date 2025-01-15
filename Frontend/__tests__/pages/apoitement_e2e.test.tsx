import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'
import Home from '@/app/page'
import Appointment from '@/app/programare/page'

// Mock fetch globally
global.fetch = jest.fn()

// Mock the useRouter
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
    }
  }
}))

describe('End-to-End: Appointment Booking Flow', () => {
  beforeEach(() => {
    // Reset all mocks before each test
    jest.resetAllMocks()
  })

  it('should complete full booking flow from home page to confirmation', async () => {
    const user = userEvent.setup()

    // 1. Start from home page
    const { unmount } = render(<Home />)
    
    // Find and click the appointment button
    const appointmentButton = screen.getByText('Programează o Consultație')
    await user.click(appointmentButton)
    
    // Cleanup home page
    unmount()

    // 2. On appointment page
    render(<Appointment />)

    // Fill out the form
    await user.type(screen.getByLabelText(/nume complet/i), 'Test User')
    await user.type(screen.getByLabelText(/email/i), 'test@example.com')
    await user.type(screen.getByLabelText(/motivul întâlnirii/i), 'Test appointment reason')

    // Submit the form
    const submitButton = screen.getByText('Trimite Programarea')
    console.log(submitButton)
    await user.click(submitButton)

    // Verify API call
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining('/booking'),
      expect.any(Object)
    )
  })

  it('should validate form fields before submission', async () => {
    const user = userEvent.setup()
    render(<Appointment />)

    // Try to submit empty form
    await user.click(screen.getByText('Trimite Programarea'))

    // Check for required field indicators
    const nameInput = screen.getByLabelText(/nume complet/i)
    const emailInput = screen.getByLabelText(/email/i)
    const reasonInput = screen.getByLabelText(/motivul întâlnirii/i)

    expect(nameInput).toBeRequired()
    expect(emailInput).toBeRequired()
    expect(reasonInput).toBeRequired()
  })
})