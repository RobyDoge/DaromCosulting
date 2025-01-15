import { render, screen, waitFor } from '@testing-library/react'
import Reviews from '@/app/recenzii/page'

// Mock the fetch function
global.fetch = jest.fn()

const mockReviews = {
  reviews: [
    {
      author_name: 'John Doe',
      rating: 5,
      relative_time_description: '1 week ago',
      text: 'Great service!',
      profile_photo_url: 'https://example.com/photo.jpg'
    }
  ],
  rating: 5,
  total: 1
}

describe('Reviews Page', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('renders reviews successfully', async () => {
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockReviews,
    })

    render(<Reviews />)

    await waitFor(() => {
      expect(screen.getByText('Great service!')).toBeInTheDocument()
      expect(screen.getByText('John Doe')).toBeInTheDocument()
    })
  })

  it('displays no reviews message when empty', async () => {
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ reviews: [], rating: 0, total: 0 }),
    })

    render(<Reviews />)

    await waitFor(() => {
      expect(screen.getByText(/nu există recenzii momentan/i)).toBeInTheDocument()
    })
  })
})

