'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Star, Loader2, User } from 'lucide-react'

interface Review {
  author_name: string
  rating: number
  relative_time_description: string
  text: string
  profile_photo_url?: string
}

interface ReviewsResponse {
  reviews: Review[]
  rating: number
  total: number
  error?: string
  message?: string
}

export default function Reviews() {
  const [reviewsData, setReviewsData] = useState<ReviewsResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch('/api/reviews')
        if (!response.ok) throw new Error('Failed to fetch reviews')
        const data: ReviewsResponse = await response.json()
        
        if (data.error) {
          throw new Error(data.error)
        }
        
        setReviewsData(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Nu s-au putut încărca recenziile. Vă rugăm încercați mai târziu.')
      } finally {
        setLoading(false)
      }
    }

    fetchReviews()
  }, [])

  function renderStars(rating: number) {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ))
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center text-red-500 p-4">
        {error}
      </div>
    )
  }

  if (!reviewsData?.reviews?.length) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center text-muted-foreground">
          {reviewsData?.message || 'Nu există recenzii momentan.'}
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Recenziile Clienților Noștri</h1>
          {reviewsData.rating && (
            <div className="flex flex-col items-center gap-2">
              <div className="flex gap-1">
                {renderStars(Math.round(reviewsData.rating))}
              </div>
              <p className="text-muted-foreground">
                {reviewsData.rating.toFixed(1)} din 5 stele ({reviewsData.total} recenzii)
              </p>
            </div>
          )}
        </div>
        
        <div className="grid gap-6">
          {reviewsData.reviews.map((review, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  {review.profile_photo_url ? (
                    <img
                      src={review.profile_photo_url || "/placeholder.svg"}
                      alt={`${review.author_name}'s profile`}
                      className="w-12 h-12 rounded-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `/placeholder.svg?height=48&width=48`;
                      }}
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                      <User className="w-6 h-6 text-muted-foreground" />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{review.author_name}</h3>
                        <div className="flex gap-1 mt-1">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {review.relative_time_description}
                      </span>
                    </div>
                    <p className="mt-4 text-muted-foreground">
                      {review.text}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

