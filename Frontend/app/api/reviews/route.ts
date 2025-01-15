import { NextResponse } from 'next/server'
import {env} from '@/config/env'

export async function GET() {
  try {
    const GOOGLE_PLACE_ID = env.GOOGLE_PLACE_ID
    const API_KEY = env.API_KEY

    if (!API_KEY) {
      throw new Error('Google Maps API key is not configured')
    }

    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?` +
      `place_id=${GOOGLE_PLACE_ID}` +
      `&fields=reviews,rating,user_ratings_total` +
      `&key=${API_KEY}` +
      `&language=ro` // Set language to Romanian
    )
    
    if (!response.ok) {
      throw new Error('Failed to fetch from Google Places API')
    }

    const data = await response.json()
    
    if (!data.result?.reviews) {
      return NextResponse.json({
        reviews: [],
        message: 'Nu există recenzii momentan.'
      })
    }

    return NextResponse.json({
      reviews: data.result.reviews,
      rating: data.result.rating,
      total: data.result.user_ratings_total
    })
  } catch (error) {
    console.log('Error fetching reviews:', error)
    console.error('Error fetching reviews:', error)
    return NextResponse.json(
      { 
        error: 'Nu s-au putut încărca recenziile. Vă rugăm încercați mai târziu.' 
      },
      { status: 500 }
    )
  }
}

